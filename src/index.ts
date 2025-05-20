import { setupServer } from '@/main/server'

export async function main() {
	await setupServer()
}

if(require.main === module) {
	main()
}