import { readFileSync } from 'node:fs'
import { nodeResolve } from '@rollup/plugin-node-resolve'

const pkg = JSON.parse(readFileSync(new URL('./package.json', import.meta.url), 'utf8'))
const peers = Object.keys(pkg.peerDependencies)

export default {
  input: 'src/Index.jsx',
  jsx: 'react',
  external: (id) => peers.some((name) => id === name || id.startsWith(`${name}/`)),
  plugins: [nodeResolve()],
  output: {
    banner: `/* spencermountain/ink-table-flip ${pkg.version} - ${pkg.license} */\n`,
    file: 'builds/index.js',
    format: 'es',
    sourcemap: false
  }
}
