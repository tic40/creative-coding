import p5Types from 'p5'

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
] as const
const types = ['circle', 'rect', 'triangle'] as const
interface Particle {
  sx: number
  sy: number
  nx: number
  ny: number
  r: number
  angle: number
  sw: number
  type: typeof types[number]
  color: typeof colors[number]
}
let particles: Particle[]
let rparticles: Particle[]

export function setup(p: p5Types, canvasParentRef: Element) {
  p.createCanvas(p.windowWidth, p.windowHeight).parent(canvasParentRef)
  p.angleMode(p.DEGREES)
  p.rectMode(p.CENTER)
  p.noStroke()
  particles = []
  rparticles = []
}

export function draw(p: p5Types) {
  p.clear()
  if (p.frameCount % 2 === 0 && p.random([false, true])) addParticles(p)

  for (let i = 0; i < 4; i++) {
    particles.forEach((v) => {
      v.angle += 0.5
      v.nx++
      v.ny = v.sy + v.sw * p.sin(v.angle)
    })
    rparticles.forEach((v) => {
      v.angle += 0.5
      v.nx -= 0.25
      v.ny = v.sy + v.sw * p.sin(v.angle)
    })
  }

  rparticles.forEach((v) => drawParticle(p, v))
  particles.forEach((v) => {
    drawParticle(p, v)
    if (p.width < v.nx) {
      rparticles.push({ ...v, sy: p.height / 5, sw: v.sw / 5, r: v.r / 5 })
    }
  })

  particles = particles.filter((v) => v.nx <= p.width)
  rparticles = rparticles.filter((v) => 0 <= v.nx)
}

function drawParticle(p: p5Types, v: Particle) {
  p.push()
  p.translate(v.nx, v.ny)
  p.rotate(v.angle)
  p.fill(v.color)
  if (v.type === 'circle') {
    p.circle(0, 0, v.r)
  } else if (v.type === 'triangle') {
    p.triangle(0, 0, v.r, 0, 0, v.r)
  } else {
    p.rect(0, 0, v.r, v.r)
  }
  p.pop()
}

function addParticles(p: p5Types) {
  for (let i = 0; i < p.random(4, 15); i++) {
    particles.push({
      sx: p.random(-100, 0),
      sy: p.random(p.height / 2, p.height / 2 + p.height / 10),
      nx: p.random(-100, 0),
      ny: 0,
      r: p.random(5, 18),
      angle: p.random(1, 30) + (p.frameCount % 360),
      sw: p.random(50, 150),
      type: p.random([...types]),
      color: p.random([...colors]),
    })
  }
}
