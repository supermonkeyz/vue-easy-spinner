import resolve from '@rollup/plugin-node-resolve';
// import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import vue from 'rollup-plugin-vue';
import svgToVue from 'rollup-plugin-svg-to-vue';
import PostCSS from 'rollup-plugin-postcss';
import alias from '@rollup/plugin-alias';
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !(process.env.ROLLUP_WATCH || process.env.PAGE);

let plugins = [
  alias({
    entries: {
      vue: 'vue/dist/vue.runtime.esm-browser.prod.js',
    },
  }),
  resolve({
    extensions: ['.mjs', '.js', '.jsx', '.json', '.vue', 'ts', 'svg'],
    browser: true,
  }),
  svgToVue(),
  typescript(),
  vue({
    cssModulesOptions: {
      generateScopedName: '__S-[local]__',
    },
  }),
  PostCSS(),
];

const dev = {
  input: 'src/main.ts',
  output: {
    file: 'public/bundle.js',
    format: 'iife',
    sourcemap: false,
  },
  plugins: [...plugins],
};

const lib = {
  input: 'package/index.ts',
  external: ['vue'],
  output: [
    {
      name: 'vueEasySpinner',
      file: pkg.browser,
      format: 'umd',
      globals: {
        vue: 'Vue',
      },
    },
    {
      file: pkg.module,
      format: 'es',
    },
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'default',
    },
  ],
  plugins: [...plugins, terser()],
};

const config = production ? lib : dev;

export default config;
