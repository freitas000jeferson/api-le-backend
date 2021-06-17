import { Meaning } from '../schemas/meaning.schema';

export interface IMeaningRepository {
  create(dto: Meaning);
  getAll();
  getById(id: string);
  update(id: string, dto: Meaning);
  delete(id: string);
}
