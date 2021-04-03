import typescript from 'rollup-plugin-typescript';

export default {
  input: './src/error-string-parser.ts',
  output: {
    file: 'index.js',
    format: 'cjs',
  },
  plugins: [
    typescript()
  ]
}