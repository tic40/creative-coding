import p5Types from 'p5'

interface Sphere {
  r: number
  x: number
  y: number
  z: number
  v: p5Types.Vector
}
let spheres: Sphere[]
const size = 10

export function setup(p: p5Types, canvasParentRef: Element) {
  p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL).parent(canvasParentRef)
  spheres = []
  for (let i = 0; i < 30; i++) spheres.push(createSphere(p))
}

export function draw(p: p5Types) {
  p.clear()
  p.orbitControl()
  p.directionalLight(255, 255, 255, 0, 0, -1)
  p.noStroke()

  for (const v of spheres) v.z += v.v.z
  if (p.frameCount % 5 === 0) spheres.push(createSphere(p))
  spheres = spheres.filter((v) => v.z < 500)

  spheres.forEach((v) => {
    p.push()
    p.translate(v.x, v.y, v.z)
    p.box(v.r)
    p.pop()
  })
}

function createSphere(p: p5Types) {
  return {
    r: size,
    x: p.random(-p.width / 5, p.width / 5),
    y: p.random(-p.height / 5, p.height / 5),
    z: p.random(-2000, -4000),
    v: p.createVector(0, 0, p.random(10, 30)),
  }
}