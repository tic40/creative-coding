import p5Types from 'p5'

const IMAGE_PATH = '../sushi/sushi_oke_nigiri.png'
let img: p5Types.Image
let t: number
let size: number

export function setup(p: p5Types, canvasParentRef: Element) {
  img = p.loadImage(IMAGE_PATH)
  p.createCanvas(p.windowWidth, p.windowHeight).parent(canvasParentRef)
  p.imageMode(p.CENTER)
  size = Math.min(p.height, p.width) / 4
  t = 0
}

export function draw(p: p5Types) {
  if (100 < t) return
  t++
  p.clear()

  const currentSize = p.lerp(1, size, t / 100)
  for (let i = 0; i < p.height / size + 1; i++) {
    for (let j = 0; j < p.width / size + 1; j++) {
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

export function mouseClicked(p: p5Types) {
  t = 0
  size *= 2 / 3
  console.log(size)
  if (size < 5) size = Math.min(p.height, p.width) / 4
}
