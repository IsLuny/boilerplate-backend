import { defineConfig } from 'tsup'

export default defineConfig({
	entry: ['src/'],
	outDir: 'out',
	splitting: false,
	sourcemap: true,
	clean: true,
})