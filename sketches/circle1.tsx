import p5Types from 'p5'

let circles: { x: number; y: number; size: number }[]
export function setup(p: p5Types, canvasParentRef: Element) {
  circles = []
  p.createCanvas(p.windowWidth, p.windowHeight).parent(canvasParentRef)
}

export function draw(p: p5Types) {
  p.clear()
  circles.push({ x: p.mouseX, y: p.mouseY, size: 10 })
  circles = circles.slice(-500)
  for (const v of circles) v.size += 0.5
  for (const v of circles) p.circle(v.x, v.y, v.size)
}
