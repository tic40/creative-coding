const SKETCH_SORT_ORDER = [
  'spring',
  'bubble',
  'moving_bubble',
  'bouncing_line',
  'easing_patterns',
  'dots',
  'bounce_simulation',
  'random_walk',
  'planet',
  'sphere_3d',
  'box_3d',
  'heatmap',
  'shooting',
  'life_game',
  'maze',
  'lissajous_curve',
  'peano_curve',
  'koch_curve',
  'sierpinski_gasket',
  'sierpinski_carpet',
  'tree',
]

function getSketchFileNames() {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const fs = require('fs')
  const fileNames = fs.readdirSync('./sketches').map((v) => v.split('.')[0])
  return SKETCH_SORT_ORDER.filter((v) => fileNames.includes(v))
}

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  output: 'export',
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
