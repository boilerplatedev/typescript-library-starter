import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import resolve, { DEFAULTS as RESOLVE_DEFAULTS } from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import terser from '@rollup/plugin-terser'
import analyze from 'rollup-plugin-analyzer'
import copy from 'rollup-plugin-copy'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import typescript from 'rollup-plugin-typescript2'
import { visualizer } from 'rollup-plugin-visualizer'

/** @type {import('rollup').RollupOptions['output']} */
const outputs = [
  {
    dir: 'dist/esm',
    format: 'esm',
    freeze: false,
    globals: {},
    sourcemap: true,
    exports: 'auto',
    preserveModules: true,
  },
  {
    dir: 'dist/cjs',
    format: 'cjs',
    freeze: false,
    globals: {},
    sourcemap: true,
    exports: 'auto',
    preserveModules: true,
  },
]

/** @type {import('rollup').RollupOptions} */
export default {
  input: ['src/index.ts'],
  output: outputs,
  treeshake: {},
  plugins: [
    peerDepsExternal(),
    resolve({ extensions: [...RESOLVE_DEFAULTS.extensions, '.cjs', '.mjs', '.jsx', '.tsx'], browser: true }),
    commonjs(),
    json(),
    typescript({
      tsconfig: './tsconfig.build.json',
    }),
    // Rollup plugin which replaces targeted strings in files while bundling.
    replace({
      preventAssignment: true,
    }),
    terser({
      mangle: {},
      ecma: 5,
      compress: {
        keep_infinity: true,
        pure_getters: true,
        passes: 10,
      },
    }),
    copy({
      targets: [
        { src: 'LICENSE', dest: 'dist' },
        { src: 'readme.md', dest: 'dist' },
        {
          src: 'package.json',
          dest: 'dist',
          transform: (contents, filename) => {
            const {
              main,
              module,
              types,
              exports,
              files,
              scripts,
              devDependencies,
              'size-limit': sizeLimit,
              ...pkg
            } = JSON.parse(contents.toString())

            return JSON.stringify({
              ...pkg,
              main: main.replace('dist/', ''),
              module: module.replace('dist/', ''),
              types: types.replace('dist/', ''),
              exports: {
                types: exports.types.replace('dist/', ''),
                require: exports.require.replace('dist/', ''),
                import: exports.import.replace('dist/', ''),
                default: exports.default.replace('dist/', ''),
              },
            })
          },
        },
      ],
    }),
    analyze({
      hideDeps: true,
      summaryOnly: true,
    }),
    visualizer({
      filename: 'rollup-plugin-visualizer-stats.html',
    }),
  ],
  external: [
    // https://github.com/HarveyD/react-component-library/issues/19#issuecomment-652323218
    'tslib',
    'react',
    'react-dom',
  ],
}
