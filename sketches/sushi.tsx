import p5Types from 'p5'

const IMAGE_PATH = '../sushi/sushi_oke_nigiri.png'
let img: p5Types.Image
let t = 0
const DEFAULT_NUM = 2
let num = DEFAULT_NUM

export function preload(p: p5Types) {
  img = p.loadImage(IMAGE_PATH);
}

export function setup(p: p5Types, canvasParentRef: Element) {
  p.createCanvas(p.windowWidth, p.windowHeight).parent(canvasParentRef)
  p.imageMode(p.CENTER)
}

export function draw(p: p5Types) {
  t += 1
  if (t <= 100) {
    p.clear()

    const w = p.width / num
    const h = img.height * (w / img.width)
    let x = w/2
    let y = h/2

    while(y <= p.height) {
      for(let i = 0; i < num; i++) {
        const nx = x + (w*i)
        p.image(img, nx, y, w*(t/100), h*(t/100))
      }
      y += h
    }
    return
  }
}

export function mouseClicked(p: p5Types) {
  t = 0
  num = Math.floor(num*1.5)
  if (50 < num) num = DEFAULT_NUM
}