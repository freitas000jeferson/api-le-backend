import { Inject, Injectable } from '@nestjs/common';
import { IPhraseRepository } from '../../repository/i-phrase.repository';
import { Phrase } from '../../schemas/phrase.schema';
@Injectable()
export class CreateUseCase {
  constructor(
    @Inject('IPhraseRepository')
    private iPhraseRepository: IPhraseRepository,
  ) {}
  async execute(dto: Phrase): Promise<Phrase> {
    return await this.iPhraseRepository.create(dto);
  }
}
