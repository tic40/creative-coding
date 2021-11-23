import getConfig from 'next/config';

function Name({ name }) {
  return <div>{ name }</div>
}

export function getStaticProps({ params }) {
  return {
    props: {
      name: params.name
    }
  }
}

export function getStaticPaths() {
  const { publicRuntimeConfig: { sketchFileNames } } = getConfig();
  const paths = sketchFileNames.map(v => `/sketches/${v}`)
  return { paths, fallback: false }
}

export default Name