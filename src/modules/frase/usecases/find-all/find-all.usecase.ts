import { Inject, Injectable } from '@nestjs/common';
import { IPhraseRepository } from '../../repository/i-phrase.repository';
import { Phrase } from '../../schemas/phrase.schema';
@Injectable()
export class FindAllUseCase {
  constructor(
    @Inject('IPhraseRepository')
    private iPhraseRepository: IPhraseRepository,
  ) {}
  async execute(): Promise<Phrase> {
    return await this.iPhraseRepository.getAll();
  }
}
