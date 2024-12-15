import getConfig from 'next/config'
import dynamic from 'next/dynamic'
import Meta from '../components/meta'
import type { NextPage } from 'next'

const ReactP5 = dynamic(() => import('react-p5'), {
  loading: () => <></>,
  ssr: false,
})

const Random: NextPage = () => {
  const { publicRuntimeConfig } = getConfig()
  const names: string[] = publicRuntimeConfig.sketchFileNames
  const name = names[Math.floor(Math.random() * names.length)]

  /* eslint-disable @typescript-eslint/no-require-imports */
  const sketch = require(`../sketches/${name}`)
  /* eslint-enable @typescript-eslint/no-require-imports */
  return (
    <>
      <Meta
        title={`random | ${process.env.siteName}`}
        description={`random | ${process.env.siteName}`}
      />
      <div className="sketch-holder">
        <ReactP5
          setup={sketch.setup}
          draw={sketch.draw}
          preload={sketch.preload}
          mouseClicked={sketch.mouseClicked}
        />
      </div>
    </>
  )
}

export default Random
