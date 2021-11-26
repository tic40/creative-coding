import type { NextPage } from 'next'
import Head from 'next/head'
import getConfig from 'next/config'
import Link from 'next/link'

const Home: NextPage = () => {
  const { publicRuntimeConfig: { sketchFileNames } } = getConfig()
  return (
    <>
      <Head>
        <title>{process.env.siteName}</title>
        <meta name="description" content="{process.env.siteName}" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="m-4">
        <h1 className="text-4xl">
          <Link href="/">
            <a>{process.env.siteName}</a>
          </Link>
        </h1>
        <ul className="my-4">
          {(sketchFileNames.map((name: string) => {
            const sketch = require(`../sketches/${name}`)
            return (
              <li key={`sketch-${name}`}>
                <Link href={`/sketches/${name}`}>
                  <a className="link text-xl"> {name} </a>
                </Link>
              </li>
            )
          }))}
        </ul>
        <footer>
          <a
            href="https://github.com/tic40/creative-coding"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </footer>
      </main>
    </>
  )
}

export default Home