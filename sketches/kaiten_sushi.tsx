import p5Types from 'p5'

const IMAGE_PATH = '../sushi/sushi_oke_nigiri.png'
let img: p5Types.Image
let t = 0
const DEFAULT_NUM = 8
let num = DEFAULT_NUM

export function preload(p: p5Types) {
  img = p.loadImage(IMAGE_PATH)
}

export function setup(p: p5Types, canvasParentRef: Element) {
  p.createCanvas(p.windowWidth, p.windowHeight).parent(canvasParentRef)
  p.imageMode(p.CENTER)
}

export function draw(p: p5Types) {
  t += 1
  p.clear()

  const w = p.width / num
  const h = w // img.height * (w / img.width)
  let x = w / 2
  let y = h / 2

  let even = true
  while (y <= p.height) {
    for (let i = 0; i < num; i++) {
      let nx = x + w * i
      let ny = y

      if (even) {
        if (i === num - 1) ny += t % h
        else nx += t % w
      } else {
        if (i === 0) ny -= t % h
        else nx -= t % w
      }

      p.translate(nx, ny)
      p.rotate(t / 100)
      p.image(img, 0, 0, w, h)
      p.resetMatrix()
    }
    y += h
    even = !even
  }
}

export function mouseClicked(p: p5Types) {
  num *= 2
  if (64 < num) num = DEFAULT_NUM
}
