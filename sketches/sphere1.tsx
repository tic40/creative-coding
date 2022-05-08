import p5Types from 'p5'

interface Sphere {
  r: number
  x: number
  y: number
  z: number
  v: p5Types.Vector
}
let spheres: Sphere[]

export function setup(p: p5Types, canvasParentRef: Element) {
  p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL).parent(canvasParentRef)
  spheres = []
  for (let i = 0; i < 30; i++) spheres.push(createSphere(p))
}

export function draw(p: p5Types) {
  p.clear()
  p.orbitControl()
  p.directionalLight(255, 255, 255, 1, 1, -1)
  p.noStroke()

  for (const v of spheres) {
    v.x += v.v.x
    v.y += v.v.y
    v.z += v.v.z
  }

  if (p.frameCount % 10 === 0) spheres.push(createSphere(p))

  spheres = spheres.filter((v) => {
    if (v.x < -p.width / 2 || p.width / 2 < v.x) return false
    if (v.y < -p.height / 2 || p.height / 2 < v.y) return false
    if (v.z < -p.width / 2 || p.width / 2 < v.z) return false
    return true
  })

  spheres.forEach((v) => {
    p.push()
    p.translate(v.x, v.y, v.z)
    p.sphere(v.r)
    p.pop()
  })
}

function createSphere(p: p5Types) {
  return {
    r: p.random(5, 20),
    x: p.random(-p.width / 3, p.width / 3),
    y: p.random(-p.height / 3, p.height / 3),
    z: p.random(-p.width / 3, p.width / 3),
    v: p.createVector(p.random(-1, 1), p.random(-1, 1), p.random(-1, 1)),
  }
}
