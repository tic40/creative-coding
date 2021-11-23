import type { NextPage } from 'next'
import Head from 'next/head'
// import p5Types from 'p5'
import dynamic from 'next/dynamic'
import getConfig from 'next/config';
import Link from 'next/link'
import { ReactChild, ReactFragment, ReactPortal } from 'react';

const ReactP5 = dynamic(() => import('react-p5'), {
  loading: () => <></>,
  ssr: false,
})

const Home: NextPage = () => {
  const { publicRuntimeConfig: { sketchFileNames } } = getConfig();
  return (
    <>
      <Head>
        <title>creative-coding | tic40</title>
        <meta name="description" content="creative-coding | tic40" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2>Sketches</h2>
      <main>
        {(sketchFileNames.map((name: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined) => {
          const sketch = require(`../sketches/${name}`);
          return (
            <div key={`sketch-${name}`} className="sketch-container">
              <Link href={`/sketches/${name}`}>
                <a> {name} </a>
              </Link>
              <div className="sketch-holder">
                <ReactP5 setup={sketch.setup} draw={sketch.draw} />
              </div>
            </div>
          )
        }))}
      </main>
    </>
  );
};

export default Home;