import p5Types from 'p5'

interface Point {
  x: number, y: number
}

let t = 0
let stars: Point[] = []
export function setup(p: p5Types, canvasParentRef: Element) {
  p.createCanvas(p.windowWidth, p.windowHeight).parent(canvasParentRef)

  for (let i = 0; i < 150; i++) {
    const x = p.random(0,p.width)
    const y = p.random(0,p.height)
    stars.push({ x, y })
  }
}

export function draw(p: p5Types) {
  t += 1
  p.clear()
  p.background(0)

  for(const { x, y } of stars) p.circle(x,y,1.6)

  p.translate(p.width/2, p.height/2)
  p.circle(0,0,8)

  for(let i = 7; i <= 15; i++) {
    const r = p.map(i*i*i, 0, 3375, 0, (Math.min(p.height, p.width)-30)/2)
    const angle = t*i*0.1+i*100
    const x = p.cos(angle/100) * r
    const y = p.sin(angle/100) * r
    p.circle(x, y, 8)

    p.push()
    p.stroke(50)
    p.noFill()
    p.circle(0, 0, r*2)
    p.pop()
  }
}