import p5Types from 'p5'

interface Point {
  x: number
  y: number
  r: number
}
interface ShootingStar {
  x: number
  y: number
  r: number
  dir: number
  speed: number
  life: number
}

let t = 0
let stars: Point[] = []
let shootingStar: ShootingStar | null

export function setup(p: p5Types, canvasParentRef: Element) {
  p.createCanvas(p.windowWidth, p.windowHeight).parent(canvasParentRef)

  stars = []
  for (let i = 0; i < 120; i++) {
    const x = p.random(0, p.width)
    const y = p.random(0, p.height)
    const r = p.random(1.4, 2.0)
    stars.push({ x, y, r })
  }
}

export function draw(p: p5Types) {
  t += 1
  p.clear()
  p.background(0)

  if (!shootingStar) {
    shootingStar = {
      x: p.random(0, p.width),
      y: p.random(0, p.width),
      r: p.random(2, 4),
      dir: p.random(0, 360),
      speed: p.random(3, 7),
      life: 100,
    }
  }

  for (const { x, y, r } of stars) p.circle(x, y, r)
  p.translate(p.width / 2, p.height / 2)
  p.circle(0, 0, 12)

  for (let i = 7; i <= 15; i++) {
    const r = p.map(
      i * i * i,
      0,
      3375,
      0,
      (Math.min(p.height, p.width) - 30) / 2
    )
    const angle = t * i * 0.1 + i * 100
    const x = p.cos(angle / 100) * r
    const y = p.sin(angle / 100) * r
    p.circle(x, y, 8)

    p.push()
    p.stroke(50)
    p.noFill()
    p.circle(0, 0, r * 2)
    p.pop()
  }

  if (shootingStar) {
    shootingStar.x += p.cos(p.radians(shootingStar.dir)) * shootingStar.speed
    shootingStar.y += p.sin(p.radians(shootingStar.dir)) * shootingStar.speed
    shootingStar.life--
    p.circle(shootingStar.x, shootingStar.y, shootingStar.r)
    if (shootingStar.life <= 0) shootingStar = null
  }
}
