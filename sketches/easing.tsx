import p5Types from 'p5'
import { easingsFunctions, easingsFunctionNames } from '../utils/easings'

let x = 0
let t = 0
let start: number
let end: number
let currentEasingName: string
let buttons: p5Types.Element[]

export function setup(p: p5Types, canvasParentRef: Element) {
  p.createCanvas(p.windowWidth, p.windowHeight).parent(canvasParentRef)
  buttons = []
  easingsFunctionNames.forEach((v, i) => {
    const btn = p.createButton(v)
    btn.position(10, 16 * (i + 1))
    btn.mouseClicked(() => {
      currentEasingName = v
      t = 0
    })
    buttons[i] = btn
  })

  start = p.height - p.height / 10
  end = p.height / 10
  x = p.width / 2
  setRandomEasingsFunctions()
}

export function draw(p: p5Types) {
  t += 1
  if (t >= 140) {
    t = 0
    ;[start, end] = [end, start]
    setRandomEasingsFunctions()
    return
  }
  if (t > 100) return

  p.clear()
  p.strokeWeight(0)
  easingsFunctionNames.forEach((v, i) => {
    buttons[i].style(`color: ${v == currentEasingName ? 'red' : '#000'}`)
  })

  p.strokeWeight(5)
  p.stroke(0)
  p.line(x, start, x, end)
  p.stroke('red')
  const d = p.lerp(start, end, easingsFunctions[currentEasingName](t / 100))
  p.line(x + 40, d, x - 40, d)
}

function setRandomEasingsFunctions(): void {
  currentEasingName =
    easingsFunctionNames[
      Math.floor(Math.random() * easingsFunctionNames.length)
    ]
}
