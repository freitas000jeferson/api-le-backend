import { Inject, Injectable } from '@nestjs/common';
import { IMemoryCardRepository } from '../../repository/i-memory-card.repository';
import { MemoryCard } from '../../schemas/memoryCard.schema';
@Injectable()
export class FindByIdUseCase {
  constructor(
    @Inject('IMemoryCardRepository')
    private iMemoryCardRepository: IMemoryCardRepository,
  ) {}
  async execute(id: string): Promise<MemoryCard> {
    return await this.iMemoryCardRepository.getById(id);
  }
}
