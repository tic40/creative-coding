import p5Types from 'p5'

interface Point {
  x: number
  y: number
}
const speed = 2
let rectangles: Rectangle[] = []
let t: number

class Rectangle {
  public size: number
  public x: number
  public y: number
  public angle: number
  public dir: number
  public dist: number
  public color: p5Types.Color
  public life: number
  public hist: Array<Point[]>

  constructor(
    size: number,
    x: number,
    y: number,
    angle: number,
    dir: number,
    dist: number,
    color: p5Types.Color
  ) {
    this.size = size
    this.x = x
    this.y = y
    this.angle = angle
    this.dir = dir
    this.dist = dist
    this.color = color

    this.hist = []
    this.life = 500
  }
}

function addRectangle(p: p5Types) {
  const size = p.random(10, 30)
  const r = p.random(0, 255)
  const g = p.random(0, 255)
  const b = p.random(0, 255)

  const color = p.color(r, g, b)
  rectangles.push(
    new Rectangle(
      size,
      p.random(p.width / 2 - 100, p.width / 2 + 100),
      p.random(p.height / 2 - 100, p.height / 2 + 100),
      0,
      p.random(0, 360),
      p.dist(0, 0, size, size),
      color
    )
  )
}

export function setup(p: p5Types, canvasParentRef: Element) {
  p.createCanvas(p.windowWidth, p.windowHeight)
  p.angleMode(p.DEGREES)
  p.rectMode(p.CENTER)
  p.stroke(0)
  p.noFill()

  t = 0
  rectangles = []
  addRectangle(p)
}

export function draw(p: p5Types) {
  t++
  p.clear()

  if (t % 100 === 0) addRectangle(p)
  rectangles = rectangles.filter((v) => 0 <= v.life)

  for (const v of rectangles) {
    if (p.width <= v.x + v.size) v.dir = p.random(90, 270)
    if (v.x - v.size <= 0) v.dir = p.random(-90, 90)
    if (p.height <= v.y + v.size) v.dir = p.random(180, 360)
    if (v.y - v.size <= 0) v.dir = p.random(0, 180)

    const alpha = 25 < v.life ? 255 : p.map(v.life, 0, 25, 0, 255)
    v.color.setAlpha(alpha)
    p.stroke(v.color)
    p.translate(v.x, v.y)
    p.rotate(v.angle)
    p.rect(0, 0, v.size * 2, v.size * 2)
    p.resetMatrix()

    const h = []
    for (let i = 0; i < 4; i++) {
      const a = v.angle + 90 * i + 45
      const tx = v.x + p.cos(a) * v.dist
      const ty = v.y + p.sin(a) * v.dist
      h.push({ x: tx, y: ty })
    }
    v.hist.unshift(h)

    let prev = v.hist[0]
    for (let i = 1; i < v.hist.length; i++) {
      const cur = v.hist[i]
      for (let j = 0; j < 4; j++) {
        const alpha = p.map(i, 0, 128, v.life, 0)
        v.color.setAlpha(alpha)
        p.stroke(v.color)
        p.line(prev[j].x, prev[j].y, cur[j].x, cur[j].y)
      }
      prev = cur
    }

    if (v.hist.length >= 128) v.hist.pop()
    v.x += p.cos(v.dir) * speed
    v.y += p.sin(v.dir) * speed
    v.angle += 1
    v.life--
  }
}