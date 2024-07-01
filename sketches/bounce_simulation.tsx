import p5Types from 'p5'

const gravity = 0.4
const vk = -0.5
let balls: Ball[]
let gp: p5Types
let bottomY: number

class Ball {
  x: number
  y: number
  vx: number
  vy: number
  r: number

  constructor(params: {
    x: number
    y: number
    vx: number
    vy: number
    r: number
  }) {
    this.x = params.x
    this.y = params.y
    this.vx = params.vx
    this.vy = params.vy
    this.r = params.r
  }

  update() {
    this.vy += gravity
    this.x += this.vx
    this.y += this.vy

    const left = this.r
    if (this.x < left) {
      this.x = left
      this.vx *= vk
    }

    const right = gp.width - this.r
    if (this.x >= right) {
      this.x = right - 1
      this.vx *= vk
    }

    const bottom = bottomY - this.r
    if (this.y >= bottom) {
      this.y = bottom - 1
      this.vy *= vk
    }
  }

  draw() {
    gp.fill(50)
    gp.circle(this.x, this.y, this.r * 2)
  }
}

export function setup(p: p5Types, canvasParentRef: Element) {
  p.createCanvas(p.windowWidth, p.windowHeight).parent(canvasParentRef)
  gp = p
  init()
}

export function draw(p: p5Types) {
  p.clear()

  p.stroke(0)
  p.strokeWeight(4)
  p.line(0, bottomY, p.width, bottomY)

  p.noStroke()
  balls.forEach((ball) => {
    ball.update()
    ball.draw()
  })
}

export function mouseClicked() {
  if (bottomY === Infinity) init()
  else bottomY = Infinity
}

function init() {
  balls = []
  const n = gp.width / 5
  bottomY = gp.height - gp.height / 10

  for (let i = 0; i < n; i++) {
    const ball = new Ball({
      x: gp.random(gp.width),
      y: gp.random(-gp.height * 2, -gp.height / 10),
      vx: gp.random(-3, 3),
      vy: gp.random(0.1, 5),
      r: gp.random([6, 8, 10, 12, 14, 16, 18]),
    })
    balls.push(ball)
  }
}
