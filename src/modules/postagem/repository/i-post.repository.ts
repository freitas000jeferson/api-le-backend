import { Postt } from '../schemas/post.schema';

export interface IPostRepository {
  create(dto: Postt);
  getAll();
  getById(id: string);
  update(id: string, dto: Postt);
  delete(id: string);
}
