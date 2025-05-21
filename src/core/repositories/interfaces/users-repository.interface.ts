import { UserDTO } from '@/core/dtos/user.dto'

export interface UsersRepository {
    create(data: Optional<UserDTO, 'id'>): Promise<UserDTO>
    findById(id: string): Promise<UserDTO | null>
    updateById(id: string, data: Partial<SuperOmit<UserDTO, 'id'>>): Promise<UserDTO>
    deleteById(id: string): Promise<void>
}