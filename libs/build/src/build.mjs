import { baseOptions } from './options.mjs'
import process, { argv } from 'node:process'
import esbuild from 'esbuild'
import { glob } from 'glob'

const isProd = process.env.NODE_ENV === 'production' || argv.includes('prod')
const shouldWatch = argv.includes('watch')
const envType = isProd ? 'prod' : 'dev'
const buildType = shouldWatch ? 'watch' : 'build'

export const buildHelper = async ({
	name,
	entryPoints = ['No entrypoint specified'],
	patterns = [],
	external = [],
	outDir = '',
}) => {
	const options = {
		...baseOptions,
		entryPoints,
		external,
		outdir: `dist/${outDir}`,
	}
	console.log(`Starting ${buildType} in ${envType} for: ${name}`)

	if (patterns.length > 0) {
		let resolvedPatterns = []
		for (const pattern of patterns) {
			resolvedPatterns.push(...(await glob(pattern)))
		}
		options.entryPoints = resolvedPatterns
	}

	if (shouldWatch) {
		const ctx = await esbuild.context(options)
		await ctx.watch()
	} else {
		await esbuild.build(options)
	}
}
