import { v4 as uuid } from 'uuid'

import { prisma } from '@/core/database'
import { UserDTO } from '@/core/dtos/user.dto'

import { UsersRepository } from '../interfaces/users-repository.interface'

export class PrismaUsersRepository implements UsersRepository {
	async create(data: Optional<UserDTO, 'id'>): Promise<UserDTO> {
		return await prisma.users.create({
			data: {
				...data,
				id: data.id ?? uuid(),
			},
		})
	}

	async deleteById(id: string): Promise<void> {
		await prisma.users.delete({
			where: {
				id,
			},
		})
	}

	async findById(id: string): Promise<UserDTO | null> {
		return await prisma.users.findUnique({
			where: {
				id,
			},
		})
	}

	async updateById(id: string, data: Partial<SuperOmit<UserDTO, 'id'>>): Promise<UserDTO> {
		return await prisma.users.update({
			where: {
				id,
			},
			data: {
				...data,
			},
		})
	}
}