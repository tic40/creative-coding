import p5Types from 'p5'

const IMAGE_PATH = '../sushi/sushi_oke_nigiri.png'
let img: p5Types.Image

export function setup(p: p5Types, canvasParentRef: Element) {
  img = p.loadImage(IMAGE_PATH)
  p.createCanvas(p.windowWidth, p.windowHeight).parent(canvasParentRef)
  p.imageMode(p.CENTER)
  p.angleMode(p.DEGREES)
}

export function draw(p: p5Types) {
  let angle = (p.frameCount / 4) % 360
  p.clear()
  p.translate(p.width / 2, p.height / 2)

  let i = 0
  while (1) {
    i++
    const x = p.cos(angle) * i
    const y = p.sin(angle) * i
    p.image(img, x, y, i / 10, i / 10)
    angle -= 6
    if (p.width < x || p.height < y) break
  }
}
