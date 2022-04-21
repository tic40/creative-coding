import p5Types from 'p5'

type Command = 'F' | 'X' | '-' | '[' | ']'
interface Data {
  start: Command
  rules: { X: string; F: string }
  length: number
  depth: number
  x: number
  y: number
  startAngle: number
  angle: number
}

let p: p5Types
let drawData: { x: number; y: number; tx: number; ty: number }[]

function addCommand(
  command: string,
  rules: Data['rules'],
  i: number,
  depth: number
): string {
  if (depth <= i) return command
  const cmd = Array.from(command)
    .map((k) => {
      if (k == 'X' || k == 'F') return rules[k]
      return k
    })
    .join('')
  return addCommand(cmd, rules, i + 1, depth)
}

function createData(): Data {
  // TODO: 他のバリエーション
  const r = ['F-[[X]+X]+F[+FX]-X']
  return {
    start: 'X',
    rules: { X: r[0], F: 'FF' },
    length: Math.floor(p.random(3, 6)),
    depth: 6,
    x: p.width / 2,
    y: p.height,
    startAngle: -90,
    angle: p.random(20, 25),
  }
}

function init() {
  const data = createData()
  console.log('data', data)
  drawData = []
  const command = addCommand(data.start, data.rules, 0, data.depth)

  const stack: { angle: number; x: number; y: number }[] = []
  let angle = data.startAngle
  let x = data.x
  let y = data.y
  for (const c of command) {
    switch (c) {
      case '+':
        angle -= data.angle
        break
      case '-':
        angle += data.angle
        break
      case '[':
        stack.push({ angle, x, y })
        break
      case ']':
        const d = stack.pop()
        if (d) [angle, x, y] = [d.angle, d.x, d.y]
        break
      case 'F':
        const tx = x + ((p.cos(angle) * data.length) / 5) * p.random([3, 5])
        const ty = y + ((p.sin(angle) * data.length) / 5) * p.random([3, 5])
        drawData.push({ x, y, tx, ty })
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

export function setup(_p: p5Types, canvasParentRef: Element) {
  p = _p
  p.createCanvas(p.windowWidth, p.windowHeight).parent(canvasParentRef)
  p.angleMode(p.DEGREES)

  init()
}

export function draw(p: p5Types) {
  p.stroke(0)
  p.noFill()

  console.log(drawData.length)
  for (let i = 0; i < (1000 < drawData.length ? 40 : 10); i++) {
    if (drawData.length == 0) return
    const d = drawData.shift()
    if (d) {
      const { x, y, tx, ty } = d
      p.line(x, y, tx, ty)
    }
  }
}

export function mouseClicked() {
  p.clear()
  init()
}
