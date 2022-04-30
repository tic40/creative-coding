import p5Types from 'p5'

let start: number
let goal: number

export function setup(p: p5Types, canvasParentRef: Element) {
  p.createCanvas(p.windowWidth, p.windowHeight).parent(canvasParentRef)
  start = 30
  goal = p.width - 30
}

export function draw(p: p5Types) {
  p.clear()

  const t = (p.frameCount % 100) / 100
  if (t === 0) [start, goal] = [goal, start]

  const x = p.lerp(start, goal, t)
  p.circle(x, p.height / 2, 30)

  p.rect(10, p.height / 2 - 50, 10, 100)
  p.rect(p.width - 20, p.height / 2 - 50, 10, 100)
}