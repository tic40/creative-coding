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
  const { length, depth } = p.random([
    { length: 1, depth: 8 },
    { length: 2, depth: 7 },
    { length: 2, depth: 6 },
    { length: 3, depth: 6 },
    { length: 3, depth: 5 },
    { length: 4, depth: 5 },
    { length: 5, depth: 5 },
  ])

  const r = ['F-[[X]+X]+F[+FX]-X']
  return {
    start: 'X',
    rules: { X: r[0], F: 'FF' },
    length: length,
    depth: depth,
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
        const tx = x + (p.cos(angle) * data.length)
        const ty = y + (p.sin(angle) * data.length)
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

  const len = drawData.length
  let speed = 10
  if (10000 < len) speed = 500
  else if (5000 < len) speed = 100
  else if (1000 < len) speed = 50

  for (let i = 0; i < speed; i++) {
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
