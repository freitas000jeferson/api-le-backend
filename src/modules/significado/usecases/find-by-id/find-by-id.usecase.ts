import { Inject, Injectable } from '@nestjs/common';
import { IMeaningRepository } from '../../repository/i-meaning.repository';
import { Meaning } from '../../schemas/meaning.schema';
@Injectable()
export class FindByIdUseCase {
  constructor(
    @Inject('IMeaningRepository')
    private iMeaningRepository: IMeaningRepository,
  ) {}
  async execute(id: string): Promise<Meaning> {
    return await this.iMeaningRepository.getById(id);
  }
}
