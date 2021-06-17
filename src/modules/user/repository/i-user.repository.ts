import { User } from '../schemas/user.schema';

export interface IUserRepository {
  findById(id: string): Promise<User>;
  findByEmail(email: string): Promise<User>;
  findAll(options: any);
  create(user: User): Promise<User>;
  update(dto: any, id: string): Promise<User>;
  delete(id: string): Promise<void>;
}
