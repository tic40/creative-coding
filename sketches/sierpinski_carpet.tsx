import p5Types from 'p5'

type Pattern = string[][]

function carpet(n: number): Pattern {
  if (n == 0) return [['#']]
  const p = carpet(n - 1)
  const psize = p.length
  const res: Pattern = Array.from({ length: psize * 3 }, () =>
    '.'.repeat(psize * 3).split('')
  )
  for (let i = 0; i < 3; i++)
    for (let j = 0; j < 3; j++)
      if (i != 1 || j != 1) {
        for (let x = 0; x < psize; x++)
          for (let y = 0; y < psize; y++) {
            res[psize * i + x][psize * j + y] = p[x][y]
          }
      }
  return res
}

let data: Pattern
let t = 0
let size = 0
export function setup(p: p5Types, canvasParentRef: Element) {
  p.createCanvas(p.windowWidth, p.windowHeight).parent(canvasParentRef)
  data = carpet(4)
  size = Math.floor(Math.min(p.windowWidth, p.windowHeight) / 90)
}

export function draw(p: p5Types) {
  p.noStroke()
  p.noFill()
  for (let i = 0; i < 40; i++) {
    if (Math.floor(t / data.length) >= data.length) return
    const now = data[Math.floor(t / data.length)][t % data.length]
    now == '#' ? p.fill(0) : p.noFill()
    p.rect(
      (t % data.length) * size,
      Math.floor(t / data.length) * size,
      size,
      size
    )
    t++
  }
}

export function mouseClicked(p: p5Types) {
  p.clear()
  t = 0
}
