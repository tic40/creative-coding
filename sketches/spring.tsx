import p5Types from 'p5'

interface Circle {
  x: number
  y: number
  r: number
}

const N = 100
const SPD = 4
let circles: Circle[]

export function setup(p: p5Types, canvasParentRef: Element) {
  p.createCanvas(p.windowWidth, p.windowHeight).parent(canvasParentRef)
  p.noFill()
  p.stroke(100)

  const w = p.width / N
  circles = Array.from(new Array(N)).map((_, i) => ({
    x: p.width / 2,
    y: p.height / 2,
    r: i * w,
  }))
}

export function draw(p: p5Types) {
  p.clear()
  circles.forEach((circle, i) => {
    circle.y += i == 0 ? (p.mouseY - circle.y) / SPD : (circles[i - 1].y - circle.y) / SPD
    circle.x += i == 0 ? (p.mouseX - circle.x) / SPD : (circles[i - 1].x - circle.x) / SPD
    p.ellipse(circle.x, circle.y, circle.r, circle.r / 4)
  })
}
