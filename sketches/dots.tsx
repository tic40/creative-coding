import p5Types from 'p5'

let n: number
const space = 40
const size = 14

export function setup(p: p5Types, canvasParentRef: Element) {
  p.createCanvas(p.windowWidth, p.windowHeight).parent(canvasParentRef)
  p.colorMode(p.HSB)
  n = Math.floor(Math.max(p.height / space, p.width / space))
}

export function draw(p: p5Types) {
  const t = p.frameCount % space
  p.clear()
  p.background(0)
  p.noStroke()
  const maxDist = p.dist(0, 0, p.width / 2, p.height / 2)

  for (let y = -1; y < n+2; y++) {
    for (let x = 0; x < n+2; x++) {
      const tx = space * x
      const ty = space * y

      const d = p.dist(tx, ty, p.mouseX, p.mouseY)
      const h = p.map(d, 0, maxDist, 0, 360)
      p.fill(h, 255, 255)
      p.circle(tx, ty + t, size)
    }
  }
}