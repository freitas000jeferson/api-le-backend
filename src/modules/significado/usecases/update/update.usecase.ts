import { Inject, Injectable } from '@nestjs/common';
import { IMeaningRepository } from '../../repository/i-meaning.repository';
import { Meaning } from '../../schemas/meaning.schema';
@Injectable()
export class UpdateUseCase {
  constructor(
    @Inject('IMeaningRepository')
    private iMeaningRepository: IMeaningRepository,
  ) {}
  async execute(id: string, dto: Meaning): Promise<Meaning> {
    return await this.iMeaningRepository.update(id, dto);
  }
}
