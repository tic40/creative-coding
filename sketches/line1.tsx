import p5Types from 'p5'

interface Rgb {
  r: number
  g: number
  b: number
}

class Point {
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
      p.random(-5, 5),
      p.random(-5, 5),
      p
    )
  }
}

let a: Point
let b: Point
let color: Rgb

function randomColor(p: p5Types) {
  color.r += p.random([-2, 2])
  color.g += p.random([-2, 2])
  color.b += p.random([-2, 2])

  color.r = p.constrain(color.r, 0, 255)
  color.g = p.constrain(color.g, 0, 255)
  color.b = p.constrain(color.b, 0, 255)
}

export function setup(p: p5Types, canvasParentRef: Element) {
  p.createCanvas(p.windowWidth, p.windowHeight).parent(canvasParentRef)

  p.noFill()
  a = Point.createRandom(p)
  b = Point.createRandom(p)
  color = { r: p.random(255), g: p.random(255), b: p.random(255) }
}

export function draw(p: p5Types) {
  a.update()
  b.update()

  randomColor(p)
  p.stroke(color.r, color.g, color.b, 100)
  p.line(a.x, a.y, b.x, b.y)
}
