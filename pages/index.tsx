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
        <div className="my-5 flex-wrap flex gap-3">
          {sketchFileNames.map((name: string) => {
            return (
              <div key={`sketch-${name}`}>
                <Link href={`/sketches/${name}`}>
                  <a className="bg-transparent text-blue-700 py-1 px-3 border border-blue-500 rounded">
                    {' '}
                    {name}{' '}
                  </a>
                </Link>
              </div>
            )
          })}
        </div>
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
