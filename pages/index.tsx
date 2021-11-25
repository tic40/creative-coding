import type { NextPage } from 'next'
import Head from 'next/head'
import getConfig from 'next/config'
import Link from 'next/link'

const Home: NextPage = () => {
  const { publicRuntimeConfig: { sketchFileNames } } = getConfig()
  return (
    <>
      <Head>
        <title>tic40/creative-coding</title>
        <meta name="description" content="tic40/creative-coding" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="m-4">
        <h1 className="text-4xl">tic40/creative-coding</h1>
        <ul className="my-4">
        {(sketchFileNames.map((name: string) => {
          const sketch = require(`../sketches/${name}`)
          return (
            <li key={`sketch-${name}`} className="underline text-xl">
              <Link href={`/sketches/${name}`}>
                <a> {name} </a>
              </Link>
            </li>
          )
        }))}
        </ul>
      </main>
    </>
  )
}

export default Home