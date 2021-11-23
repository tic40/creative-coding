function getSketchFileNames() {
  const fs = require('fs')
  return fs.readdirSync('./sketches').map(v =>  v.split('.')[0])
}

const sketchFileNames = getSketchFileNames()

/** @type {import('next').NextConfig} */
module.exports = {
  basePath: '/creative-coding',
  assetPrefix: '/creative-coding/',
  reactStrictMode: true,
  publicRuntimeConfig: {
    sketchFileNames
  },
}