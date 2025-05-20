import { env } from '@/env'

import { PrismaClient } from './prisma-client'

const createDatabaseClient = () => {
	const prisma = new PrismaClient({
		datasources: {
			db: {
				url: env.POSTGRES_URL,
			},
		},
	})

	return prisma
}

export { PrismaClient }
export const prisma = createDatabaseClient()