function getSketchFileNames() {
  const fs = require('fs')
  return fs.readdirSync('./sketches').map(v =>  v.split('.')[0])
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
