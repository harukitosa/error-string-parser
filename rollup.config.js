import typescript from 'rollup-plugin-typescript';
import { terser } from "rollup-plugin-terser"

export default {
  input: './src/error-string-parser.ts',
  output: {
    file: 'index.js',
    format: 'cjs',
  },
  plugins: [
    typescript(),
    terser({ output: { comments: /@license/i } }),
  ]
}