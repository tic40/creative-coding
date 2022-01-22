import p5Types from 'p5'
import { threadId } from 'worker_threads'

interface BulletParam {
  x: number
  y: number
  angle: number
  speed: number
  size?: number
  color?: string
}

interface EnemyParam {
  x: number
  y: number
  p: p5Types
  shotType: string
}

class Enemy {
  x: number
  y: number
  p: p5Types
  bullets: Bullet[]
  bulletSpeed: number = 5
  moveSpeed: number = 5
  destX: number
  destY: number
  shotType: string

  constructor(param: EnemyParam) {
    this.x = param.x
    this.y = param.y
    this.p = param.p
    this.bullets = []
    this.destX = this.x
    this.destY = this.y
    this.shotType = param.shotType || 'aim'
  }

  shoot() {
    if (this.shotType === 'nWay') {
      this.nWayShot()
    } else if (this.shotType === 'allRound') {
      this.allRoundShot()
    } else {
      this.aimShot()
    }
  }

  aimShot() {
    const p = this.p
    const bullet = new (this.bullet())({
      x: this.x,
      y: this.y,
      angle: p.atan2(p.mouseY - this.y, p.mouseX - p.width / 2),
      speed: this.bulletSpeed,
      color: '#de9610',
    })
    this.bullets.push(bullet)
  }

  allRoundShot() {
    const p = this.p

    for (let angle = 0; angle < p.TWO_PI; angle += 0.2) {
      const bullet = new (this.bullet())({
        x: this.x,
        y: this.y,
        angle,
        speed: this.bulletSpeed,
        color: '#fff001',
      })
      this.bullets.push(bullet)
    }
  }

  nWayShot(n = 3) {
    const p = this.p
    const baseAngle = p.atan2(p.mouseY - this.y, p.mouseX - p.width / 2)
    const dir = [-1, 1]

    for (let i = 0; i < n; i++) {
      const n = i === 0 ? 1 : 2
      for (let j = 0; j < n; j++) {
        const angle = baseAngle + 0.1 * i * dir[j]
        const bullet = new (this.bullet())({
          x: this.x,
          y: this.y,
          angle,
          speed: this.bulletSpeed,
          color: '#d06d8c',
        })
        this.bullets.push(bullet)
      }
    }
  }

  update() {
    const p = this.p
    if (
      Math.abs(this.x - this.destX) < 0.01 &&
      Math.abs(this.y - this.destY) < 0.01
    ) {
      this.destX = p.constrain(this.x + p.random(-30, 30), 0, p.width)
      this.destY = p.constrain(this.y + p.random(-30, 30), 0, p.height)
    }
    const v = p.createVector(this.x, this.y)
    v.lerp(this.destX, this.destY, 0, 0.1)
    this.x = v.x
    this.y = v.y

    this.bullets.forEach((v) => v.update(p))
    this.bullets = this.bullets.filter((bullet) =>
      this.inScreen(bullet.x, bullet.y)
    )
  }

  draw() {
    this.p.fill(240)
    this.p.rect(this.x - 5, this.y - 5, 10, 10)
    this.bullets.forEach((v) => v.draw(this.p))
  }

  inScreen(x: number, y: number) {
    return x >= 0 && x < this.p.width && y >= 0 && y < this.p.height
  }

  private bullet() {
    return Bullet
  }
}

class Bullet {
  x: number
  y: number
  angle: number
  speed: number
  size: number
  color: string

  constructor(param: BulletParam) {
    this.x = param.x
    this.y = param.y
    this.angle = param.angle
    this.speed = param.speed
    this.size = param.size || 10
    this.color = param.color || '#FFFFFF'
  }

  update(p: p5Types) {
    this.x += p.cos(this.angle) * this.speed
    this.y += p.sin(this.angle) * this.speed
  }

  draw(p: p5Types) {
    p.fill(this.color)
    p.circle(this.x, this.y, this.size)
  }
}

let dark = false
let enemy: Enemy
const shotTypes = ['aim', 'nWay', 'allRound']
let currentShotTypeId = 0

export function setup(p: p5Types, canvasParentRef: Element) {
  p.createCanvas(p.windowWidth, p.windowHeight).parent(canvasParentRef)
  currentShotTypeId = Math.floor(p.random(0, 2))
  enemy = new Enemy({
    x: p.width / 2,
    y: p.height / 5,
    p,
    shotType: shotTypes[currentShotTypeId],
  })
}

export function draw(p: p5Types) {
  p.clear()
  p.background(dark ? 40 : 240)

  if (p.frameCount % 400 === 0) {
    currentShotTypeId++
    currentShotTypeId %= shotTypes.length
    enemy.shotType = shotTypes[currentShotTypeId]
  }

  if (p.frameCount % 10 === 0) enemy.shoot()

  enemy.update()
  enemy.draw()
}

export function mouseClicked() {
  dark = !dark
}
