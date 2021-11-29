import p5Types from 'p5'

const maxN = 30
let n = 10
let t = 0
let rev = false

export function setup(p: p5Types, canvasParentRef: Element) {
  p.createCanvas(p.windowWidth, p.windowHeight).parent(canvasParentRef)
  p.colorMode(p.HSB)
}

export function draw(p: p5Types) {
  t++
  t %= 10
  p.clear()
  p.background(0)
  const maxDist = p.dist(0, 0, p.width / 2, p.height / 2);

  for (let y = -n*10; y < n; y++) {
    for (let x = -n*10; x < n; x++) {
      const tx = (p.width / (n - 1)) * x
      const ty = (p.height / (n - 1)) * y

      const d = p.dist(tx, ty, p.mouseX, p.mouseY)
      const h = p.map(d, 0, maxDist, 0, 360);
      p.fill(h, 255, 255);
      if (rev) {
        p.circle(tx, ty-t*10, 10)
      } else {
        p.circle(tx, ty+t*10, 10)
      }
    }
  }
}

export function mouseClicked(p: p5Types) {
  rev = !rev
  n += 10
  if (maxN < n) n = 10
}