import { Inject, Injectable } from '@nestjs/common';
import { IMeaningRepository } from '../../repository/i-meaning.repository';
import { Meaning } from '../../schemas/meaning.schema';
@Injectable()
export class FindAllUseCase {
  constructor(
    @Inject('IMeaningRepository')
    private iMeaningRepository: IMeaningRepository,
  ) {}
  async execute(): Promise<Meaning> {
    return await this.iMeaningRepository.getAll();
  }
}
