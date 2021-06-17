import { Inject, Injectable } from '@nestjs/common';
import { IPhraseRepository } from '../../repository/i-phrase.repository';
import { Phrase } from '../../schemas/phrase.schema';
@Injectable()
export class FindByIdUseCase {
  constructor(
    @Inject('IPhraseRepository')
    private iPhraseRepository: IPhraseRepository,
  ) {}
  async execute(id: string): Promise<Phrase> {
    return await this.iPhraseRepository.getById(id);
  }
}
