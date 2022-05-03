import p5Types from 'p5'

let circles: {
  n: number
  angle: number
  rx: number
  ry: number
  v: number
  angleV: number
  size: number
  live: boolean
}[]

export function setup(p: p5Types, canvasParentRef: Element) {
  p.createCanvas(p.windowWidth, p.windowHeight).parent(canvasParentRef)
  p.angleMode(p.DEGREES)
  circles = [randomCircle(p)]
}

export function draw(p: p5Types) {
  p.clear()
  p.translate(p.width / 2, p.height / 2)
  p.stroke(100)

  circles.forEach((v) => {
    let live = false
    for (let i = 0; i < 360; i += 360 / v.n) {
      const x = p.cos(v.angle + i) * v.rx
      const y = p.sin(v.angle + i) * v.ry
      p.circle(x, y, v.size)
      if (
        -p.width / 2 < x &&
        x < p.width / 2 &&
        -p.height / 2 < y &&
        y < p.height / 2
      )
        live = true
    }
    v.angle += v.angleV
    v.rx += v.v
    v.ry += v.v
    v.live = live
    v.v += 0.001
  })

  circles = circles.filter((v) => v.live)
  if (p.frameCount % 60 === 0) circles.push(randomCircle(p))
}

function randomCircle(p: p5Types) {
  return {
    n: Math.floor(p.random(5, 20)),
    rx: p.random(-50, 50),
    ry: p.random(-50, 50),
    v: p.random(-1, 1),
    angleV: p.random([-1, -0.8, -0.5, 0.5, 0.8, 1]),
    angle: p.random(0, 360),
    size: 10,
    live: true,
  }
}
