import postcss from 'rollup-plugin-postcss';
import babel from 'rollup-plugin-babel';

export default {
  input: ['src/index.js', 'src/Hello.js'],
  plugins: [
    postcss({
      modules: true,
      extract: 'lib/styles.css',
    }),
    babel({
      exclude: 'node_modules/**',
    }),
  ],
  experimentalCodeSplitting: true,

  output: {
    dir: 'lib',
    format: 'es',
  },
};
