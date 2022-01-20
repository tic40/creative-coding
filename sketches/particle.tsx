import p5Types from 'p5'

class Particle {
  x: number
  y: number
  vector: p5Types.Vector
  r: number
  life: number
  color: string
  type: string

  constructor(
    x: number,
    y: number,
    vector: p5Types.Vector,
    r: number,
    color: string,
    type: string
  ) {
    this.x = x
    this.y = y
    this.vector = vector
    this.r = r
    this.life = 500
    this.color = color
    this.type = type
  }

  update() {
    this.x += this.vector.x
    this.y += this.vector.y
    this.life--
  }

  draw(p: p5Types) {
    p.fill(this.color)
    if (this.type === 'rect') {
      p.rect(this.x, this.y, this.r * 2, this.r * 2, 2)
    } else if (this.type === 'triangle') {
      p.triangle(
        this.x,
        this.y,
        this.x + this.r,
        this.y - this.r * 1.5,
        this.x + this.r * 2,
        this.y
      )
    } else {
      p.circle(this.x, this.y, this.r * 2)
    }
  }
}

let dark = false
let particlesSet: Particle[][] = []
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
const types = ['circle', 'rect', 'triangle']

export function setup(p: p5Types, canvasParentRef: Element) {
  p.createCanvas(p.windowWidth, p.windowHeight).parent(canvasParentRef)
  addParticles(p)
}

export function draw(p: p5Types) {
  p.clear()
  if (dark) p.background(0)
  else p.background(250)
  p.noStroke()

  if (p.frameCount % 100 === 0) {
    addParticles(p)
    particlesSet = particlesSet.filter((particles) => 0 < particles[0].life)
  }

  particlesSet.forEach((particles) => {
    particles.forEach((v) => {
      v.update()
      v.draw(p)
    })
  })
}

export function mouseClicked() {
  dark = !dark
}

function addParticles(p: p5Types) {
  const add = []
  const center = { x: p.random(0, p.width), y: p.random(0, p.height) }
  for (let i = 0; i < 100; i++) {
    const vx = p.random(-5, 5)
    const vy = p.random(-5, 5)
    const vector = p.createVector(vx, vy)
    const particle = new Particle(
      center.x,
      center.y,
      vector,
      p.random(5, 15),
      p.random(colors),
      p.random(types)
    )
    add.push(particle)
  }
  particlesSet.push(add)
}
