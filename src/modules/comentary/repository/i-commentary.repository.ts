import { Commentary } from '../schemas/commentary.schema';

export interface ICommentaryRepository {
  create(dto: Commentary);
  getAll();
  getById(id: string);
  update(id: string, dto: Commentary);
  delete(id: string);
}
