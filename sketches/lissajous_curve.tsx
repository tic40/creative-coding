import p5Types from 'p5'

let rx: number
let ry: number
let angleA: number
let angleB: number
let speedA: number
let speedB: number
let px: number
let py: number

export function setup(p: p5Types, canvasParentRef: Element) {
  p.createCanvas(p.windowWidth, p.windowHeight).parent(canvasParentRef)
  init(p)
}

export function draw(p: p5Types) {
  for (let i = 0; i < 5; i++) {
    const x = p.width / 2 + p.cos(angleA) * rx
    const y = p.height / 2 + p.sin(angleB) * ry
    p.line(px, py, x, y)

    angleA += speedA
    angleB += speedB

    px = x
    py = y
  }
}

export function mouseClicked(p: p5Types) {
  init(p)
}

function init(p: p5Types) {
  p.clear()
  p.stroke(0)
  rx = p.random(p.width / 3, p.width / 2)
  ry = p.random(p.height / 3, p.height / 2)
  angleA = p.random(p.TWO_PI)
  angleB = p.random(p.TWO_PI)
  speedA = p.random(0.01, 0.1)
  speedB = p.random(0.01, 0.1)

  px = p.width / 2 + p.cos(angleA) * rx
  py = p.height / 2 + p.sin(angleB) * ry
}
