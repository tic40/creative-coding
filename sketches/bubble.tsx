import p5Types from 'p5'

let circles: { x: number; y: number; size: number }[]
export function setup(p: p5Types, canvasParentRef: Element) {
  p.createCanvas(p.windowWidth, p.windowHeight).parent(canvasParentRef)
  circles = []
  p.noFill()
}

export function draw(p: p5Types) {
  p.clear()
  circles.push({
    x: p.random(p.windowWidth),
    y: p.random(p.windowHeight),
    size: p.random(10, 100),
  })
  for (const v of circles) v.size -= 0.5
  circles = circles.filter((v) => 0 < v.size)
  for (const v of circles) p.circle(v.x, v.y, v.size)
}
