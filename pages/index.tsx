import type { NextPage } from 'next'
import getConfig from 'next/config'
import Link from 'next/link'
import Meta from '../components/meta'

const Home: NextPage = () => {
  const {
    publicRuntimeConfig: { sketchFileNames },
  } = getConfig()
  return (
    <>
      <Meta
        title={process.env.siteName || ''}
        description={process.env.siteName || ''}
      />
      <main className="m-4">
        <h1 className="text-4xl">
          <Link href="/">
            <a>{process.env.siteName}</a>
          </Link>
        </h1>
        <ul className="my-4">
          {sketchFileNames.map((name: string) => {
            return (
              <li key={`sketch-${name}`}>
                <Link href={`/sketches/${name}`}>
                  <a className="link text-xl"> {name} </a>
                </Link>
              </li>
            )
          })}
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
