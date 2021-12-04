import p5Types from 'p5'

interface Route {
  x: number
  y: number
}

let route: Route[]
let t = 0
let i = 0

export function setup(p: p5Types, canvasParentRef: Element) {
  p.createCanvas(p.windowWidth, p.windowHeight).parent(canvasParentRef)
  const centerX = p.windowWidth / 5
  const centerY = p.windowHeight / 5
  route = [
    { x: p.windowWidth / 5, y: p.windowHeight / 5 },
    { x: (p.windowWidth / 5) * 4, y: (p.windowHeight / 5) * 4 },
    { x: (p.windowWidth / 5) * 4, y: p.windowHeight / 5 },
    { x: p.windowWidth / 5, y: (p.windowHeight / 5) * 4 },
  ]
}

export function draw(p: p5Types) {
  p.clear()
  p.fill('#FF0000')
  p.noStroke()
  for (const { x, y } of route) {
    p.circle(x, y, 30)
  }
  const prev = route[i]
  const next = route[(i + 1) % route.length]

  const x = p.lerp(prev.x, next.x, t)
  const y = p.lerp(prev.y, next.y, t)

  p.circle(x, y, 30)

  t += 0.01
  if (t > 1) {
    t = 0
    i++
    i %= route.length
  }
}
