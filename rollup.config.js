import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';

export default [
  // UMD (for Browser) build
  {
    input: 'src/main.js',
    output: {
      name: pkg.name,
      file: pkg.browser,
      format: 'umd'
    },
    plugins: [
      json(),
      resolve(),
      babel({
        exclude: 'node_modules/**',
        babelrc: false,
        presets: [["@babel/env", { "modules": false }]]
      })
    ]
  },

  // CommonJS (for Node) and ES module (for bundlers) build.
  {
    input: 'src/main.js',
    //external: ['ms'],
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' }
    ],
    plugins: [
      json(),
      resolve(),
      babel({ exclude: 'node_modules/**' })
    ]
  }
];
