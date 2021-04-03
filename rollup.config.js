import typescript from 'rollup-plugin-typescript';

export default {
  input: './src/error-stringify.ts',
  output: {
    file: 'index.js',
    format: 'cjs',
  },
  plugins: [
    typescript()
  ]
}