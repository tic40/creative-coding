import p5Types from 'p5'

interface Rgb {
  r: number
  g: number
  b: number
}

class Ball {
  x: number
  y: number
  vx: number
  vy: number
  p: p5Types

  constructor(x: number, y: number, vx: number, vy: number, p: p5Types) {
    this.x = x
    this.y = y
    this.vx = vx
    this.vy = vy
    this.p = p
  }

  update() {
    this.x += this.vx
    this.y += this.vy

    if (this.x <= 0) {
      this.x = 0
      this.vx *= -1
    } else if (this.x >= this.p.width - 1) {
      this.x = this.p.width - 1
      this.vx *= -1
    }

    if (this.y <= 0) {
      this.y = 0
      this.vy *= -1
    } else if (this.y >= this.p.height - 1) {
      this.y = this.p.height - 1
      this.vy *= -1
    }
  }

  static createRandom(p: p5Types) {
    return new this(
      p.random(0, p.width),
      p.random(0, p.height),
      p.random(-3, 3),
      p.random(-3, 3),
      p
    )
  }
}

let a: Ball
let b: Ball
let c: Rgb
let darkMode = false

function randomColor(p: p5Types) {
  c.r += p.random([-2, 2])
  c.g += p.random([-2, 2])
  c.b += p.random([-2, 2])

  c.r = p.constrain(c.r, 0, 255)
  c.g = p.constrain(c.g, 0, 255)
  c.b = p.constrain(c.b, 0, 255)
}

export function setup(p: p5Types, canvasParentRef: Element) {
  p.createCanvas(p.windowWidth, p.windowHeight).parent(canvasParentRef)

  p.noFill()
  a = Ball.createRandom(p)
  b = Ball.createRandom(p)
  c = { r: p.random(255), g: p.random(255), b: p.random(255) }
}

export function draw(p: p5Types) {
  a.update()
  b.update()

  randomColor(p)
  p.stroke(c.r, c.g, c.b, 100)
  p.line(a.x, a.y, b.x, b.y)
}

export function mouseClicked(p: p5Types) {
  darkMode = !darkMode
  p.clear()
  if (darkMode) p.background(180)
  else p.background(255)
}
