import p5Types from 'p5'

interface Point {
  x: number
  y: number
}

const borderInterval = 40
const bottomMargin = 10
let points: Point[]
let t = 0
let base = 0
let speed = 3

export function setup(p: p5Types, canvasParentRef: Element) {
  p.createCanvas(p.windowWidth, p.windowHeight).parent(canvasParentRef)
  p.stroke(80)
  initPoint(p)
}

export function draw(p: p5Types) {
  t++
  if (t % speed) return

  p.clear()
  p.background(230)
  const np = nextPoint(p)
  points.push(np)

  if (p.width / 2 < points.length) {
    points.shift()
    points = points.map((v) => ({ x: v.x - 1, y: v.y }))
  }

  if (np.y < 0) {
    base -= np.y
    points = points.map((v) => ({ x: v.x, y: v.y - np.y }))
  }

  if (p.height - bottomMargin < np.y) {
    const diff = np.y - (p.height - bottomMargin)
    if (base < diff) {
      base = 0
      points = points.map((v) => ({
        x: v.x,
        y: Math.min(p.height - bottomMargin, v.y - base),
      }))
    } else {
      base -= diff
      points = points.map((v) => ({
        x: v.x,
        y: Math.min(p.height - bottomMargin, v.y - diff),
      }))
    }
  }

  drawBorder(p)
  drawLine(p)
}

function initPoint(p: p5Types): void {
  const x = 20
  const y = Math.floor(p.random(p.height, p.height / 2))
  points = [{ x, y }]
}

function nextPoint(p: p5Types): Point {
  let n = 1
  const v = Math.floor(p.random(1, 100))
  if (v <= 50) n *= 2
  else if (v <= 70) n *= 3
  else if (v <= 80) n *= 5
  else if (v <= 90) n *= 10
  else if (v <= 95) n *= 20
  else if (v <= 97) n *= 30
  else if (v <= 99) n *= 40
  else n *= 100

  const x = points[points.length - 1].x + 1
  const high = Math.floor(p.random(1, 100)) >= 99 ? n * 20 : n
  const bottom = Math.floor(p.random(1, 100)) === 100 ? -n * 2 : -n
  const y = points[points.length - 1].y + Math.floor(p.random(bottom, high))
  return { x, y }
}

function drawBorder(p: p5Types): void {
  p.push()
  p.stroke(200)
  p.fill(160)

  for (let i = p.height - bottomMargin; 0 <= i; i -= borderInterval) {
    const ny = i + Math.floor((base + borderInterval - 1) / borderInterval)
    p.line(10, ny, p.width, ny)
    const text = Math.floor(
      (p.height - bottomMargin - i + base + borderInterval - 1) / borderInterval
    )
    p.text(text, 10, ny)
  }
  p.pop()
}

function drawLine(p: p5Types): void {
  for (let i = 0; i < points.length - 1; i++) {
    const cur = points[i]
    const nx = points[i + 1]
    p.line(cur.x, cur.y, nx.x, nx.y)
  }
}

export function mouseClicked() {
  speed++
  if (3 < speed) speed = 1
}
