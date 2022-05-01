import p5Types from 'p5'

const n = 2
let circles: {
  x: number
  y: number
  size: number
  vector: p5Types.Vector
}[]

export function setup(p: p5Types, canvasParentRef: Element) {
  p.createCanvas(p.windowWidth, p.windowHeight).parent(canvasParentRef)

  circles = []
  for (let i = 0; i < 100; i++) circles.push(createCircle(p))
}

export function draw(p: p5Types) {
  p.clear()

  for (const v of circles) {
    v.x += v.vector.x
    v.y += v.vector.y
  }
  for (let i = 0; i < n; i++) circles.push(createCircle(p))

  circles = circles.filter((v) => {
    if (v.x + v.size / 2 < 0 || p.width < v.x - v.size / 2) return false
    if (v.y + v.size / 2 < 0 || p.height < v.y - v.size / 2) return false
    if (v.vector.mag() === 0) return false
    return true
  })

  for (const v of circles) p.circle(v.x, v.y, v.size)
}

function createCircle(p: p5Types) {
  return {
    x: p.random(50, p.width - 50),
    y: p.random(50, p.height - 50),
    size: p.random(5, 30),
    vector: p.createVector(p.random(-2, 2), p.random(-2, 2)),
  }
}
