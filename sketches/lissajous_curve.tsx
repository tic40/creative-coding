import p5Types from 'p5'

let rx: number
let ry: number
let angleX: number
let angleY: number
let speedX: number
let speedY: number
let px: number
let py: number
let angle: number

export function setup(p: p5Types, canvasParentRef: Element) {
  p.createCanvas(p.windowWidth, p.windowHeight).parent(canvasParentRef)

  p.stroke(240)
  p.noFill()
  p.background(0)

  angle = 0
  rx = p.random(p.width / 4, p.width / 2)
  ry = p.random(p.height / 4, p.height / 2)
  angleX = p.random(p.TWO_PI)
  angleY = p.random(p.TWO_PI)
  speedX = p.random(0.04, 0.08)
  speedY = p.random(0.04, 0.08)

  px = p.width / 2 + p.cos(angleX) * rx
  py = p.height / 2 + p.sin(angleY) * ry
}

export function draw(p: p5Types) {
  const x = p.width / 2 + p.cos(angleX) * rx
  const y = p.height / 2 + p.sin(angleY) * ry
  p.line(px, py, x, y)

  angleX += speedX
  angleY += speedY

  px = x
  py = y
}
