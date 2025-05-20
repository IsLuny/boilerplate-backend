import { z } from 'zod'

import { env } from '@/env'
import { envSchema } from '@/env/env-schema'
import { FastifyFC, FastifyTypedInstance } from '@/infra/http/fastify'

export const Routes: FastifyFC = (fastify: FastifyTypedInstance) => {
	fastify.route({
		url: '/ping',
		method: 'GET',
		schema: {
			response: {
				200: z.object({
					timestamp: z.string(),
					environment: envSchema.shape.NODE_ENV,
				}),
			},
		},
		handler(request, response) {
			response.status(200).send({
				timestamp: new Date().toISOString(),
				environment: env.NODE_ENV,
			})
		},
	})
}