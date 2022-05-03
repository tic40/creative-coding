import p5Types from 'p5'
import { easingsFunctions, easingsFunctionNames } from '../utils/easings'

let t: number
let start: number
let end: number
let buttons: p5Types.Element[]
let idx: number

export function setup(p: p5Types, canvasParentRef: Element) {
  p.createCanvas(p.windowWidth, p.windowHeight).parent(canvasParentRef)

  buttons = []
  easingsFunctionNames.forEach((v, i) => {
    const btn = p.createButton(v)
    btn.position(10, 18 * i)
    btn.mouseClicked(() => {
      idx = i
      t = 0
    })
    buttons[i] = btn
  })

  t = 0
  start = p.height / 10
  end = p.height - p.height / 10
  idx = 0
  p.stroke(0)
  p.strokeWeight(2)
}

export function draw(p: p5Types) {
  t++
  if (t >= 140) {
    t = 0
    idx = (idx + 1) % easingsFunctionNames.length
    return
  }
  if (t > 100) return

  p.clear()
  const currentEasingName = easingsFunctionNames[idx]
  easingsFunctionNames.forEach((v, i) =>
    buttons[i].style(`color: ${v == currentEasingName ? 'red' : '#000'}`)
  )

  const d = p.lerp(start, end, easingsFunctions[currentEasingName](t / 100))
  p.circle(p.width / 2, d, 80)
}
