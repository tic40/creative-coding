const SKETCH_SORT_ORDER = [
  'circle',
  'circle_random',
  'linear_interpolation',
  'map',
  'easing',
  'sushi',
  'kaiten_sushi',
  'dots',
  'planet'
]

function getSketchFileNames() {
  const fs = require('fs')
  const fileNames = fs.readdirSync('./sketches').map(v =>  v.split('.')[0])
  return SKETCH_SORT_ORDER.filter(v => fileNames.includes(v))
}

const isProd = process.env.NODE_ENV === "production"

/** @type {import('next').NextConfig} */
module.exports = {
  basePath: isProd ? '/creative-coding' : '',
  assetPrefix: isProd ? '/creative-coding/' : '',
  env: {
    siteName: isProd ? 'tic40/creative-coding' : '[dev] tic40/creative-coding'
  },
  reactStrictMode: true,
  publicRuntimeConfig: {
    sketchFileNames: getSketchFileNames()
  },
}