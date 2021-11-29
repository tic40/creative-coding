import p5Types from 'p5'

const n = 20
let t = 0

export function setup(p: p5Types, canvasParentRef: Element) {
  p.createCanvas(p.windowWidth, p.windowHeight).parent(canvasParentRef)
  p.colorMode(p.HSB)
}

export function draw(p: p5Types) {
  t++
  t %= p.height / (n - 1)
  p.clear()
  p.background(0)
  const maxDist = p.dist(0, 0, p.width / 2, p.height / 2);

  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      const tx = (p.width / (n - 1)) * x
      const ty = (p.height / (n - 1)) * y

      const d = p.dist(tx, ty, p.mouseX, p.mouseY)
      const h = p.map(d, 0, maxDist, 0, 360);
      p.fill(h, 255, 255);
      p.noStroke()
      p.circle(tx, ty+t, 10)
    }
  }
}