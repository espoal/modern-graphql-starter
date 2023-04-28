import graphqlLoaderPlugin from '@luckycatfactory/esbuild-graphql-loader'

export const baseOptions = {
	plugins: [graphqlLoaderPlugin['default']()],
	bundle: true,
	splitting: false,
	format: 'esm',
	platform: 'node',
	target: 'esnext',
	treeShaking: true,
	outExtension: { '.js': '.mjs' },
	tsconfig: 'tsconfig.json',
}
