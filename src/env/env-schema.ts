import { z } from 'zod'
    
export const envSchema = z.object({
	NODE_ENV: z
		.enum(['development', 'test', 'production', 'local'])
		.default('local'),
	SERVER_HOST: z.string().default('0.0.0.0'),
	SERVER_PORT: z.coerce.number().default(3000),
	DEBUG: z.coerce.boolean().default(true),

	POSTGRES_URL: z.string(),
})