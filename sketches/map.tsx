import p5Types from 'p5'

interface Route {
  x: number,
  y: number
}

let route: Route[]
let x = 0
let y = 0

export function setup(p: p5Types, canvasParentRef: Element) {
  p.createCanvas(p.windowWidth, p.windowHeight).parent(canvasParentRef)

  x = 0
  y = p.height / 2
}

export function draw(p: p5Types) {
  x+=2
  x %= p.width

  p.clear()
  p.background(0)

  p.strokeWeight(1)
  p.stroke("#f0f0f0")
  p.noFill()
  p.line(0, y, p.width, y)
  p.line(x, y - 10, x, y + 10)

  const r = p.map(x, 0, p.width, 300, 0)
  p.strokeWeight(6)
  p.stroke("#f0f0f0")
  p.noFill()
  p.circle(x, y, r)
}