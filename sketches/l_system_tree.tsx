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
        case 'X':
          // do nothing
          break
        default:
          console.error(`illegal command: ${c}`)
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
    p.stroke('#42692F')
    p.noFill()

    for (let i = 0; i < steps; i++) {
      if (this.drawData.length == 0) return
      const d = this.drawData.shift()
      if (d) p.line(d.x, d.y, d.tx, d.ty)
    }
  }
}

let lSystem: LSystem

function init(p: p5Types) {
  const { length, depth } = p.random([
    { length: 1, depth: 8 },
    { length: 2, depth: 7 },
    { length: 2, depth: 6 },
    { length: 3, depth: 6 },
    { length: 3, depth: 5 },
    { length: 4, depth: 5 },
    { length: 5, depth: 5 },
  ])

  const data = {
    start: 'X',
    rules: {
      X: p.random(['F-[[X]+X]+F[+FX]-X', 'F+[[X]-X]-F[-FX]+X']),
      F: 'FF',
    },
    length: length,
    depth: depth,
    x: p.width / 2,
    y: p.height,
    startAngle: -90,
    angle: p.random(20, 25),
  }

  lSystem = new LSystem(data, p)
}

export function setup(p: p5Types, canvasParentRef: Element) {
  p.createCanvas(p.windowWidth, p.windowHeight).parent(canvasParentRef)
  p.angleMode(p.DEGREES)
  init(p)
}

export function draw(p: p5Types) {
  const len = lSystem.drawData.length
  let steps = 10
  if (10000 < len) steps = 500
  else if (5000 < len) steps = 100
  else if (1000 < len) steps = 50
  lSystem.draw(steps)
}

export function mouseClicked(p: p5Types) {
  p.clear()
  init(p)
}
