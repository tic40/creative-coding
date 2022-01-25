import p5Types from 'p5'

const n = 120
const gravity = 0.1
const vk = -0.8
let balls: Ball[]
let gp: p5Types
let bottomY: number

const colors = [
  '#de9610',
  '#c93a40',
  '#d06d8c',
  '#fff001',
  '#65ace4',
  '#a0c238',
  '#56a764',
  '#d16b16',
  '#0074bf',
  '#9460a0',
  '#cc528b',
  '#f2cf01',
]

class Ball {
  x: number
  y: number
  vx: number
  vy: number
  r: number
  color: string

  constructor(params: {
    x: number
    y: number
    vx: number
    vy: number
    r: number
    color: string
  }) {
    this.x = params.x
    this.y = params.y
    this.vx = params.vx
    this.vy = params.vy
    this.r = params.r
    this.color = params.color
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
    gp.fill(this.color)
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

  p.fill(220)
  p.rect(0, bottomY, p.width, bottomY)

  p.noStroke()
  balls.forEach((ball) => {
    ball.update()
    ball.draw()
  })
}

export function mouseClicked() {
  balls.forEach((ball) => {
    ball.vy = gp.random(-8, -4)
  })
}

function init() {
  balls = []
  bottomY = gp.height - gp.height / 10

  for (let i = 0; i < n; i++) {
    const ball = new Ball({
      x: gp.random(gp.width),
      y: gp.random(-gp.width * 2, 0),
      vx: gp.random(-3, 3),
      vy: gp.random(0.1, 5),
      r: gp.random([6, 8, 10, 12, 14, 16, 18, 20]),
      color: gp.random(colors),
    })
    balls.push(ball)
  }
}
