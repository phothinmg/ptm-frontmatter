import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

export default{
    input: 'index.js',
    output: {
		format: 'es',
		dir: 'src',
        sourcemap: true
	},
    plugins: [
        resolve(), 
        babel({ babelHelpers: 'bundled'}),
    ]
}