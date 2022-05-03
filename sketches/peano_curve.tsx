import p5Types from 'p5'

interface Data {
  start: string
  rules: Record<string, unknown>
  length: number
  depth: number
  x: number
  y: number
  startAngle: number
  angle: number
}

class LSystem {
  p: p5Types
  data: Data
  command: string
  drawData: { x: number; y: number; tx: number; ty: number }[]
  stack: { angle: number; x: number; y: number }[]

  constructor(d: Data, p: p5Types) {
    this.data = d
    this.p = p
    this.drawData = []
    this.stack = []
    this.command = this.generateCommand(this.data.start, 0)
    this.prepare()
  }

  prepare() {
    let angle = this.data.startAngle
    let x = this.data.x
    let y = this.data.y
    const p = this.p

    for (const c of this.command) {
      switch (c) {
        case '+':
          angle -= this.data.angle
          break
        case '-':
          angle += this.data.angle
          break
        case '[':
          this.stack.push({ angle, x, y })
          break
        case ']':
          const d = this.stack.pop()
          if (d) [angle, x, y] = [d.angle, d.x, d.y]
          break
        case 'F':
          const tx = x + p.cos(angle) * this.data['length']
          const ty = y + p.sin(angle) * this.data['length']
          this.drawData.push({ x, y, tx, ty })
          x = tx
          y = ty
          break
        default:
          // do nothing
          break
      }
    }
  }

  generateCommand(command: string, i: number): string {
    const d = this.data
    if (d.depth <= i) return command

    const cmd = Array.from(command)
      .map((k) => d.rules[k] || k)
      .join('')
    return this.generateCommand(cmd, i + 1)
  }

  draw(steps: number): void {
    const p = this.p
    p.stroke(0)

    for (let i = 0; i < steps; i++) {
      if (this.drawData.length == 0) return
      const d = this.drawData.shift()
      if (d) p.line(d.x, d.y, d.tx, d.ty)
    }
  }
}

let lSystem: LSystem

function init(p: p5Types) {
  const data = {
    start: 'X',
    rules: { X: '+YF-XFX-FY+', Y: '-XF+YFY+FX-' },
    length: 5,
    depth: 6,
    x: 10,
    y: 10,
    startAngle: 90,
    angle: 90,
  }

  lSystem = new LSystem(data, p)
}

export function setup(p: p5Types, canvasParentRef: Element) {
  p.createCanvas(p.windowWidth, p.windowHeight).parent(canvasParentRef)
  p.angleMode(p.DEGREES)
  init(p)
}

export function draw(p: p5Types) {
  p.stroke(0)
  p.noFill()

  const len = lSystem.drawData.length
  let steps = 10
  if (5000 < len) steps = 50
  else if (1000 < len) steps = 25
  lSystem.draw(steps)
}

export function mouseClicked(p: p5Types) {
  p.clear()
  init(p)
}
