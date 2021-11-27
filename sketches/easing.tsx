import p5Types from 'p5'
import { easingsFunctions, easingsFunctionNames } from '../utils/easings'

interface Route {
  x: number,
  y: number
}

let route: Route[]
let x = 0
let y = 0
let rev = false
let top = 0
let bottom = 0
let prev = 0
let next = 0
let t = 0
let currentEasingName: string

export function setup(p: p5Types, canvasParentRef: Element) {
  p.createCanvas(p.windowWidth, p.windowHeight).parent(canvasParentRef)

  top = p.height - p.height / 10
  bottom = p.height / 10
  x = p.width / 2
  y = bottom
  prev = bottom
  next = top
  setRandomEasingsFunctions()
}

export function draw(p: p5Types) {
  // 誤差がでるのでtは100倍の値を入れておく
  t += 1

  if (t >= 140) {
    t = 0
    const tmp = prev
    prev = next
    next = tmp
    setRandomEasingsFunctions()
    return
  }
  if (t > 100) return

  p.clear()

  p.textSize(50)
  p.fill(100)
  p.stroke(100)
  p.text(currentEasingName, 10, p.height/2)

  p.strokeWeight(5)
  p.stroke(0)
  p.line(x, top, x, bottom)


  p.stroke("#FF0000")
  const d = p.lerp(prev, next, easingsFunctions[currentEasingName](t/100))
  p.line(x+40, d, x-40, d)
}

function setRandomEasingsFunctions(): void {
  currentEasingName = easingsFunctionNames[ Math.floor(Math.random()*easingsFunctionNames.length) ]
}