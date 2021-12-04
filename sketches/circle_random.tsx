import p5Types from 'p5'

export function setup(p: p5Types, canvasParentRef: Element) {
  p.createCanvas(p.windowWidth, p.windowHeight).parent(canvasParentRef)
}

export function draw(p: p5Types) {
  p.circle(p.mouseX, p.mouseY, p.random(100))
}
