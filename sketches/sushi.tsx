import p5Types from 'p5'

const IMAGE_PATH = '../sushi/sushi_oke_nigiri.png'
let img: p5Types.Image
let t: number
let size: number

export function preload(p: p5Types) {
  img = p.loadImage(IMAGE_PATH)
}

export function setup(p: p5Types, canvasParentRef: Element) {
  p.createCanvas(p.windowWidth, p.windowHeight).parent(canvasParentRef)
  p.imageMode(p.CENTER)
  size = 100
  t = 0
}

export function draw(p: p5Types) {
  if (100 < t) return
  t++
  p.clear()

  const currentSize = p.lerp(1, size, t / 100)
  for (let i = 0; i < p.height / size; i++) {
    for (let j = 0; j < p.width / size; j++) {
      p.image(
        img,
        j * size - size / 2,
        i * size - size / 2,
        currentSize,
        currentSize
      )
    }
  }
}

export function mouseClicked() {
  t = 0
  size -= 5
  if (size <= 0) size = 100
}
