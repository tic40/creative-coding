import getConfig from 'next/config'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import type { NextPage } from 'next'
import { GetStaticProps, GetStaticPaths } from 'next'

interface Props {
  name: string
}

const ReactP5 = dynamic(() => import('react-p5'), {
  loading: () => <></>,
  ssr: false,
})

const Name: NextPage<Props> = ({ name }) => {
  /* eslint-disable @typescript-eslint/no-var-requires */
  const sketch = require(`../../sketches/${name}`)
  /* eslint-enable @typescript-eslint/no-var-requires */
  return (
    <>
      <Head>
        <title>
          {name} | {process.env.siteName}
        </title>
        <meta name="description" content={`${name} | tic40/creative-coding`} />
        <link rel="icon" href="../favicon.ico" />
      </Head>
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

export const getStaticProps: GetStaticProps = (context) => {
  return {
    props: {
      name: context.params?.name,
    },
  }
}

export const getStaticPaths: GetStaticPaths = () => {
  const { publicRuntimeConfig } = getConfig()
  const names: string[] = publicRuntimeConfig.sketchFileNames
  const paths = names.map((v) => `/sketches/${v}`)
  return { paths, fallback: false }
}

export default Name
