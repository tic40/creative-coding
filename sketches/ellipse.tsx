import p5Types from 'p5'

interface Circle {
  x: number
  y: number
  radius: number
}

const n = 80
const speed = 4
let circles: Circle[]

export function setup(p: p5Types, canvasParentRef: Element) {
  p.createCanvas(p.windowWidth, p.windowHeight).parent(canvasParentRef)

  p.noFill()
  p.stroke(200)

  const w = Math.min(8, (p.width - 50) / n)
  circles = []
  for (let i = 0; i < n; i++) {
    circles.push({
      x: p.width / 2,
      y: p.height / 2,
      radius: 10 + i * w,
    })
  }
}

export function draw(p: p5Types) {
  p.clear()
  p.background(0)

  circles.forEach((circle, i) => {
    if (i === 0) circle.y += (p.mouseY - circle.y) / speed
    else circle.y += (circles[i - 1].y - circle.y) / speed

    p.ellipse(circle.x, circle.y, circle.radius, circle.radius / 4)
  })
}
