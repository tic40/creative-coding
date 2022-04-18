import p5Types from 'p5'

interface Point {
  x: number
  y: number
}
let p: p5Types
let depth: number
let t: number
const MAX_DEPTH = 5
let memo: { a: Point; b: Point }[][] = []

export function setup(_p: p5Types, canvasParentRef: Element) {
  p = _p
  p.createCanvas(p.windowWidth, p.windowHeight).parent(canvasParentRef)
  p.angleMode(p.DEGREES)
  p.stroke(0)
  p.noFill()

  t = 0
  depth = 3
  memo = []

  const a = { x: 0, y: (p.height / 4) * 3 }
  const b = { x: p.width, y: (p.height / 4) * 3 }

  for (let i = 1; i <= MAX_DEPTH; i++) {
    memo[i] = []
    koch(i, a, b, i)
  }
}

function koch(n: number, a: Point, b: Point, init_val: number) {
  if (n === 0) {
    memo[init_val].push({ a, b })
    return
  }

  const c = lerp2d(a, b, 1 / 3)
  const d = lerp2d(a, b, 2 / 3)

  const angle = p.atan2(d.y - c.y, d.x - c.x) - 60

  const k = p.dist(c.x, c.y, d.x, d.y)
  const e = { x: c.x + p.cos(angle) * k, y: c.y + p.sin(angle) * k }

  koch(n - 1, a, c, init_val)
  koch(n - 1, c, e, init_val)
  koch(n - 1, e, d, init_val)
  koch(n - 1, d, b, init_val)
}

function lerp2d(a: Point, b: Point, t: number) {
  return { x: p.lerp(a.x, b.x, t), y: p.lerp(a.y, b.y, t) }
}

export function draw(p: p5Types) {
  if (memo[depth].length <= t) return
  const { a, b } = memo[depth][t]
  p.line(a.x, a.y, b.x, b.y)
  t++
}

export function mouseClicked() {
  depth = MAX_DEPTH <= depth ? 1 : depth + 1
  t = 0
  p.clear()
  p.stroke(0)
  p.noFill()
}
