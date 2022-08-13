import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve, { DEFAULTS as RESOLVE_DEFAULTS } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'
import json from '@rollup/plugin-json'
import sourceMaps from 'rollup-plugin-sourcemaps'
import replace from '@rollup/plugin-replace'

const pkg = require('./package.json')

export default {
  input: 'src/index.ts',
  output: [
    {
      // file: pkg.exports.import,
      dir: 'dist/esm',
      format: 'esm',
      freeze: false,
      globals: {},
      sourcemap: true,
    },
    {
      // file: pkg.exports.require,
      dir: 'dist/cjs',
      format: 'cjs',
      freeze: false,
      globals: {},
      sourcemap: true,
    },
  ],
  treeshake: {},
  plugins: [
    peerDepsExternal(),
    resolve({ extensions: [...RESOLVE_DEFAULTS.extensions, '.cjs', '.mjs', '.jsx'] }),
    commonjs(),
    json(),
    typescript({
      tsconfig: './tsconfig.build.json',
      // Typescript d.ts files will be generated in `/dist/types` folder. Specified via tsconfig.json.
      useTsconfigDeclarationDir: true,
    }),
    // Rollup plugin which replaces targeted strings in files while bundling.
    replace({
      preventAssignment: true,
    }),
    sourceMaps(),
    terser({
      mangle: {},
      ecma: 5,
      compress: {
        keep_infinity: true,
        pure_getters: true,
        passes: 10,
      },
    }),
  ],
  preserveModules: true,
  external: [
    // https://github.com/HarveyD/react-component-library/issues/19#issuecomment-652323218
    'tslib',
  ],
}
