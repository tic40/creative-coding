function getSketchFileNames() {
  const fs = require('fs')
  return fs.readdirSync('./sketches').map(v =>  v.split('.')[0])
}

/** @type {import('next').NextConfig} */
module.exports = {
  basePath: '/creative-coding',
  assetPrefix: '/creative-coding/',
  env: {
    siteName: 'tic40/creative-coding'
  },
  reactStrictMode: true,
  publicRuntimeConfig: {
    sketchFileNames: getSketchFileNames()
  },
}
