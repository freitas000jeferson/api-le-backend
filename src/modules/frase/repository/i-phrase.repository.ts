import { Phrase } from '../schemas/phrase.schema';

export interface IPhraseRepository {
  create(dto: Phrase);
  getAll();
  getById(id: string);
  update(id: string, dto: Phrase);
  delete(id: string);
}
