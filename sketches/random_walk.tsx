import p5Types from 'p5'

interface Point {
  x: number
  y: number
}
let points: Point[]

export function setup(p: p5Types, canvasParentRef: Element) {
  p.createCanvas(p.windowWidth, p.windowHeight).parent(canvasParentRef)
  points = [{ x: 10, y: p.height / 2 }]
}

export function draw(p: p5Types) {
  p.clear()
  const np = nextPoint(p)
  points.push(np)

  if (p.width - p.width / 10 < points.length) {
    points.shift()
    points = points.map((v) => ({ x: v.x - 1, y: v.y }))
  }

  if (np.y < 0) {
    points = points.map((v) => ({ x: v.x, y: v.y - np.y }))
  } else if (p.height < np.y) {
    points = points.map((v) => ({ x: v.x, y: v.y - (np.y - p.height) }))
  }

  for (let i = 1; i < points.length; i++) {
    const now = points[i]
    const prev = points[i - 1]
    p.line(prev.x, prev.y, now.x, now.y)
  }
}

function nextPoint(p: p5Types): Point {
  const last = points[points.length - 1]
  return {
    x: last.x + 1,
    y: last.y + p.random(-20, 20),
  }
}
