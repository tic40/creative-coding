import p5Types from 'p5'

interface Point {
  x: number
  y: number
}
let p: p5Types
let depth: number
let t: number
const MAX_DEPTH = 8
let memo: { a: Point; b: Point; c: Point }[][] = []

export function setup(_p: p5Types, canvasParentRef: Element) {
  p = _p
  p.createCanvas(p.windowWidth, p.windowHeight).parent(canvasParentRef)
  p.angleMode(p.DEGREES)
  p.noStroke()
  p.fill(0)

  t = 0
  depth = 3
  memo = []

  const offset = 10
  const size = Math.min(p.height, p.width) - offset * 2

  const lx = (p.width - size) / 2
  const a = { x: lx, y: p.height - offset * 2 }
  const b = { x: a.x + size, y: a.y }
  const c = { x: a.x + p.cos(-60) * size, y: a.y + p.sin(-60) * size }

  for (let i = 1; i <= MAX_DEPTH; i++) {
    memo[i] = []
    gasket(i, a, b, c, i)
  }
}

function gasket(n: number, a: Point, b: Point, c: Point, init_val: number) {
  if (n === 0) {
    memo[init_val].push({ a, b, c })
    return
  }

  const d = lerp2d(a, b, 0.5)
  const e = lerp2d(b, c, 0.5)
  const f = lerp2d(c, a, 0.5)

  gasket(n - 1, a, d, f, init_val)
  gasket(n - 1, d, b, e, init_val)
  gasket(n - 1, f, e, c, init_val)
}

function lerp2d(a: Point, b: Point, t: number) {
  return { x: p.lerp(a.x, b.x, t), y: p.lerp(a.y, b.y, t) }
}

export function draw(p: p5Types) {
  if (memo[depth].length <= t) return
  for (let i = 0; i < (depth < 6 ? 1 : 6); i++) {
    if (memo[depth].length <= t) return
    const { a, b, c } = memo[depth][t]
    p.triangle(a.x, a.y, b.x, b.y, c.x, c.y)
    t++
  }
}

export function mouseClicked() {
  depth = MAX_DEPTH <= depth ? 1 : depth + 1
  t = 0
  p.clear()
  p.noStroke()
  p.fill(0)
}
