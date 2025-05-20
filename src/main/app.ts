import { env } from '@/env'
import { HttpServer } from '@/infra/http/server'

const createApp = () => {
	const app = new HttpServer({
		hostname: env.SERVER_HOST,
		port: env.SERVER_PORT,

		fastify: {
			logger: true,
		},
	})

	return app
}

export const app = createApp()