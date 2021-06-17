import { Inject, Injectable } from '@nestjs/common';
import { IMemoryCardRepository } from '../../repository/i-memory-card.repository';
import { MemoryCard } from '../../schemas/memoryCard.schema';
@Injectable()
export class FindAllUseCase {
  constructor(
    @Inject('IMemoryCardRepository')
    private iMemoryCardRepository: IMemoryCardRepository,
  ) {}
  async execute(): Promise<MemoryCard> {
    return await this.iMemoryCardRepository.getAll();
  }
}
