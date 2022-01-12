import p5Types from 'p5'

const size = 4
const speed = 3
let layer: p5Types.Graphics

export function setup(p: p5Types, canvasParentRef: Element) {
  p.createCanvas(p.windowWidth, p.windowHeight).parent(canvasParentRef)
  p.noStroke()

  layer = p.createGraphics(p.windowWidth, p.windowHeight)
  layer.noStroke()

  for (let y = 0; y < p.height; y += size)
    for (let x = 0; x < p.width; x += size) {
      const v = p.noise(x / 100, y / 100)
      drawPixel(x, y, v)
    }
}

export function draw(p: p5Types) {
  if (p.frameCount % speed) return
  p.clear()

  p.image(layer, 0, 0)
  layer.copy(layer, 1, 0, p.width - 1, p.height, 0, 0, p.width - 1, p.height)

  const x = p.width - 1
  const nx = (x + p.frameCount / speed) / 100
  for (let y = 0; y < p.height; y += size) {
    const v = p.noise(nx, y / 100)
    drawPixel(x, y, v)
  }
}

function drawPixel(x: number, y: number, v: number) {
  if (v <= 0.325) {
    layer.fill('#5e539e')
  } else if (v <= 0.5) {
    layer.fill('#5584c5')
  } else if (v <= 0.53125) {
    layer.fill('#7ac1a5')
  } else if (v <= 0.5625) {
    layer.fill('#a2d7a4')
  } else if (v <= 0.6875) {
    layer.fill('#d3d599')
  } else if (v <= 0.775) {
    layer.fill('#808080')
  } else {
    layer.fill('#fff')
  }

  layer.rect(x, y, size, size)
}
