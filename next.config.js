const SKETCH_SORT_ORDER = [
  'circle1',
  'circle2',
  'circle3',
  'bubble1',
  'bubble2',
  'sushi1',
  'sushi2',
  'line1',
  'easing',
  'dots',
  'planet',
  'lissajous_curve',
  'koch_curve',
  'sierpinski_gasket',
  'space_filling_curve',
  'tree',
  'random_walk',
  'heat_map',
  'particle',
  'bullet',
  'bouncing_ball',
  'life_game',
  'maze',
]

function getSketchFileNames() {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const fs = require('fs')
  const fileNames = fs.readdirSync('./sketches').map((v) => v.split('.')[0])
  return SKETCH_SORT_ORDER.filter((v) => fileNames.includes(v))
}

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  basePath: isProd ? '/creative-coding' : '',
  assetPrefix: isProd ? '/creative-coding/' : '',
  env: {
    basePath: isProd ? '/creative-coding/' : '',
    siteName: isProd ? 'tic40/creative-coding' : '[dev] tic40/creative-coding',
    ogImage: 'https://avatars.githubusercontent.com/u/739402?v=4?s=400',
  },
  reactStrictMode: true,
  publicRuntimeConfig: {
    sketchFileNames: getSketchFileNames(),
  },
}
