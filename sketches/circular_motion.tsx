import p5Types from 'p5'

interface Point {
  x: number
  y: number
}

const k = 3
const n = 30
const limit = 300
let baseRad: number
let rx: number
let ry: number
let t = 0
let dx: boolean
let dy: boolean
let speed: number
let vertical = true
let showLine = false

export function setup(p: p5Types, canvasParentRef: Element) {
  p.createCanvas(p.windowWidth, p.windowHeight).parent(canvasParentRef)
  init(p)
}

export function draw(p: p5Types) {
  t++
  p.clear()
  p.background(0)
  drawItem(p)

  baseRad += 0.02
  rx += dx ? speed : -speed
  ry -= dy ? speed : -speed

  if (limit < t) init(p)
}

export function mouseClicked() {
  showLine = !showLine
}

function init(p: p5Types) {
  t = 0
  rx = 200
  ry = 0
  baseRad = 0
  speed = p.random(0.8, 3.2)
  dx = Math.floor(p.random(0, 10)) % 2 === 0
  dy = Math.floor(p.random(0, 10)) % 2 === 0
  vertical = Math.floor(p.random(0, 10)) % 2 === 0
}

function drawItem(p: p5Types) {
  const a: Point[] = []
  const b: Point[] = []

  for (let rad = 0; rad < p.TWO_PI; rad += p.TWO_PI / n) {
    if (vertical) {
      const x = p.width / 2 + p.cos(baseRad + rad) * rx
      const y = p.height / 4 + p.sin(baseRad + rad) * ry
      p.circle(x, y, 10)
      p.circle(x, p.height - y, 10)
      a.push({ x, y })
      b.push({ x: x, y: p.height - y })
    } else {
      const x = p.width / 4 + p.cos(baseRad + rad) * rx
      const y = p.height / 2 + p.sin(baseRad + rad) * ry
      p.circle(x, y, 8)
      p.circle(p.width - x, p.height - y, 8)
      a.push({ x, y })
      b.push({ x: p.width - x, y: p.height - y })
    }
  }

  for (let i = 0; i < k; i++) {
    const tmp = b.pop()
    if (tmp) b.unshift(tmp)
  }

  if (showLine) {
    p.push()
    p.stroke(240)
    p.noFill()

    for (let i = 0; i < a.length; i++) p.line(a[i].x, a[i].y, b[i].x, b[i].y)
    p.pop()
  }
}
