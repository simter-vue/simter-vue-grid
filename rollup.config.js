import babel from 'rollup-plugin-babel';
import pkg from './package.json';
import vue from 'rollup-plugin-vue';
import commonjs from 'rollup-plugin-commonjs';

const input = "src/grid.vue";
export default [
  // UMD build for Browser
  {
    input: input,
    output: {
      name: pkg.name,
      file: pkg.browser,
      format: 'umd'
    },
    plugins: [
      commonjs(),
      vue(),
      babel({
        exclude: 'node_modules/**',
        babelrc: false,
        presets: [["@babel/env", { "modules": false }]]
      })
    ]
  },

  // CommonJS build for Node.
  // And ES module build for bundlers.
  {
    input: input,
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' }
    ],
    plugins: [
      commonjs(),
      vue(),
      babel({ exclude: 'node_modules/**' })
    ]
  }
];