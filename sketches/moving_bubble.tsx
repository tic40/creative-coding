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
  p.noFill();
}

export function draw(p: p5Types) {
  p.clear()
  circles.push({
    x: p.random(p.windowWidth),
    y: p.random(p.windowHeight),
    size: p.random(10, 100),
    vector: p.createVector(p.random(-2, 2), p.random(-2, 2))
  })
  for (const v of circles) {
    v.x += v.vector.x
    v.y += v.vector.y
    v.size -= 0.5
  }
  circles = circles.filter((v) => {
    if (v.x + v.size / 2 < 0 || p.width < v.x - v.size / 2) return false
    if (v.y + v.size / 2 < 0 || p.height < v.y - v.size / 2) return false
    if (v.vector.mag() === 0) return false
    if (v.size <= 0) return false
    return true
  })
  for (const v of circles) p.circle(v.x, v.y, v.size)
}