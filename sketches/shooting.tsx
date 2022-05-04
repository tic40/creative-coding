import p5Types from 'p5'

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
  baseBulletSpeed = 5
  baseBulletSize = 8
  moveSpeed = 5
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
    if (this.shotType === '3way') {
      this.nWayShot(2)
    } else if (this.shotType === '5way') {
      this.nWayShot(3)
    } else if (this.shotType === 'allRound') {
      this.allRoundShot()
    } else if (this.shotType === 'aimBig') {
      this.aimShot(this.baseBulletSize * 10, this.baseBulletSpeed)
    } else {
      this.aimShot()
    }
  }

  aimShot(size = this.baseBulletSize, speed = this.baseBulletSpeed) {
    const p = this.p
    const bullet = new (this.bullet())({
      x: this.x,
      y: this.y,
      angle: p.atan2(p.mouseY - this.y, p.mouseX - p.width / 2),
      speed,
      size,
      color: '#65ace4',
    })
    this.bullets.push(bullet)
  }

  allRoundShot(size = this.baseBulletSize, speed = this.baseBulletSpeed) {
    const p = this.p

    for (let angle = 0; angle < p.TWO_PI; angle += 0.2) {
      const bullet = new (this.bullet())({
        x: this.x,
        y: this.y,
        angle,
        speed,
        size,
        color: '#65ace4',
      })
      this.bullets.push(bullet)
    }
  }

  nWayShot(n = 3, size = this.baseBulletSize, speed = this.baseBulletSpeed) {
    const p = this.p
    const baseAngle = p.atan2(p.mouseY - this.y, p.mouseX - p.width / 2)
    const dir = [-1, 1]

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < (i === 0 ? 1 : 2); j++) {
        const angle = baseAngle + 0.1 * i * dir[j]
        const bullet = new (this.bullet())({
          x: this.x,
          y: this.y,
          angle,
          speed,
          size,
          color: '#65ace4',
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
    this.p.fill('#65ace4')
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

class Own {
  x: number
  y: number
  p: p5Types
  bullets: Bullet[]

  constructor(x: number, y: number, p: p5Types) {
    this.x = x
    this.y = y
    this.p = p
    this.bullets = []
  }

  shoot() {
    this.normalShot()
  }

  normalShot() {
    const p = this.p
    const bullet = new (this.bullet())({
      x: this.x,
      y: this.y,
      angle: p.radians(-90),
      speed: 8,
      size: 8,
      color: '#56a764',
    })
    this.bullets.push(bullet)
    console.log(bullet.angle)
  }

  update() {
    const p = this.p
    this.x = p.mouseX
    this.y = p.mouseY
    this.bullets.forEach((v) => v.update(p))
    this.bullets = this.bullets.filter((bullet) =>
      this.inScreen(bullet.x, bullet.y)
    )
  }

  draw() {
    this.p.fill('#56a764')
    this.p.rect(this.p.mouseX - 5, this.p.mouseY - 10, 10, 10)
    this.bullets.forEach((v) => v.draw(this.p))
  }

  private bullet() {
    return Bullet
  }

  inScreen(x: number, y: number) {
    return x >= 0 && x < this.p.width && y >= 0 && y < this.p.height
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
    this.size = param.size || 8
    this.color = param.color || '#FFFFFF'
  }

  update(p: p5Types) {
    this.x += p.cos(this.angle) * this.speed
    this.y += p.sin(this.angle) * this.speed
  }

  draw(p: p5Types) {
    p.noStroke()
    p.fill(this.color)
    p.circle(this.x, this.y, this.size)
  }
}

let enemy: Enemy
let own: Own
const shotTypes = ['aim', '3way', '5way', 'allRound', 'aimBig']

export function setup(p: p5Types, canvasParentRef: Element) {
  p.createCanvas(p.windowWidth, p.windowHeight).parent(canvasParentRef)
  enemy = new Enemy({
    x: p.width / 2,
    y: p.height / 5,
    p,
    shotType: p.random(shotTypes),
  })
  own = new Own(p.width / 2, p.height - 10, p)
}

export function draw(p: p5Types) {
  p.clear()

  if (p.frameCount % 200 === 0) {
    enemy.shotType = p.random(shotTypes)
  }

  if (p.frameCount % (enemy.shotType === 'aimBig' ? 20 : 10) === 0)
    enemy.shoot()

  enemy.update()
  own.update()
  enemy.draw()
  own.draw()
}

export function mouseClicked() {
  own.shoot()
}
