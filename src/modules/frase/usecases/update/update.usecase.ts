import { Inject, Injectable } from '@nestjs/common';
import { IPhraseRepository } from '../../repository/i-phrase.repository';
import { Phrase } from '../../schemas/phrase.schema';
@Injectable()
export class UpdateUseCase {
  constructor(
    @Inject('IPhraseRepository')
    private iPhraseRepository: IPhraseRepository,
  ) {}
  async execute(id: string, dto: Phrase): Promise<Phrase> {
    return await this.iPhraseRepository.update(id, dto);
  }
}
