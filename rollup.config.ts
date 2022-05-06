import ts from 'rollup-plugin-typescript2'
import dts from 'rollup-plugin-dts'
import resolve from '@rollup/plugin-node-resolve' // 依赖引用插件
import commonjs from '@rollup/plugin-commonjs' // commonjs模块转换插件

export default [{
  input: './src/index.ts',
  output: [
    {
      file: './dist/index.js',
      format: 'cjs',
    },
    {
      file: './dist/index.mjs',
      format: 'es',
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    ts({
      tsconfig: './tsconfig.json',
    })
  ]
},
{
  input: './src/index.ts',
  output: {
    file: './dist/index.d.ts',
    format: 'es',
  },
  plugins: [dts()],
},
]