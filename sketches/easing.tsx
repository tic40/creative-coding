import p5Types from 'p5'
import easings from '../utils/easings'

interface Route {
  x: number,
  y: number
}

const eas = [
  'linear',
  'easeInQuad',
  'easeInOutQuad',
  'easeInCubic',
  'easeOutCubic',
  'easeInOutCubic',
  'easeInQuart',
  'easeOutQuart',
  'easeInOutQuart',
  'easeInQuint',
  'easeOutQuint',
  'easeInOutQuint',
  'easeInSine',
  'easeOutSine',
  'easeInOutSine',
  'easeInExpo',
  'easeOutExpo',
  'easeInOutExpo',
  'easeInCirc',
  'easeOutCirc',
  'easeInOutCirc',
  'easeInBack',
  'easeOutBack',
  'easeInOutBack',
  'easeInElastic',
  'easeOutElastic',
  'easeInOutElastic',
  'easeInBounce',
  'easeOutBounce',
  'easeInOutBounce'
]

let route: Route[]
let x = 0
let y = 0
let rev = false
let top = 0
let bottom = 0
let prev = 0
let next = 0
let t = 0
let easingName: string

export function setup(p: p5Types, canvasParentRef: Element) {
  p.createCanvas(p.windowWidth, p.windowHeight).parent(canvasParentRef)

  top = p.height - p.height / 10
  bottom = p.height / 10
  x = p.width / 2
  y = bottom
  prev = bottom
  next = top
  easingName = eas[ Math.floor(p.random(0, eas.length-1)) ]
}

export function draw(p: p5Types) {
  t += 0.01

  if (t >= 1.4) {
    t = 0
    const tmp = prev
    prev = next
    next = tmp
    easingName = eas[ Math.floor(p.random(0, eas.length-1)) ]
    return
  }

  if (t > 1.0) return

  p.clear()
  p.stroke(0)
  p.strokeWeight(2)
  p.line(x, top, x, bottom)
  p.stroke("#FF0000")
  const d = p.lerp(prev, next, easings[easingName](t));
  p.line(x+40, d, x-40, d)
}