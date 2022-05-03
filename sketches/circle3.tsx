import p5Types from 'p5'

interface Circle {
  x: number
  y: number
  r: number
}

const n = 100
const speed = 4
let circles: Circle[]

export function setup(p: p5Types, canvasParentRef: Element) {
  p.createCanvas(p.windowWidth, p.windowHeight).parent(canvasParentRef)
  p.noFill()
  p.stroke(100)

  const w = p.width / n
  circles = Array.from(new Array(n)).map((_, i) => ({
    x: p.width / 2,
    y: p.height / 2,
    r: i * w,
  }))
}

export function draw(p: p5Types) {
  p.clear()
  circles.forEach((circle, i) => {
    if (i === 0) {
      circle.y += (p.mouseY - circle.y) / speed
      circle.x += (p.mouseX - circle.x) / speed
    } else {
      circle.y += (circles[i - 1].y - circle.y) / speed
      circle.x += (circles[i - 1].x - circle.x) / speed
    }
    p.ellipse(circle.x, circle.y, circle.r, circle.r / 4)
  })
}
