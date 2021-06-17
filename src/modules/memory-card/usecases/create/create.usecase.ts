import { Inject, Injectable } from '@nestjs/common';
import { IMemoryCardRepository } from '../../repository/i-memory-card.repository';
import { MemoryCard } from '../../schemas/memoryCard.schema';

@Injectable()
export class CreateUseCase {
  constructor(
    @Inject('IMemoryCardRepository')
    private iMemoryCardRepository: IMemoryCardRepository
  ) {}
  async execute(dto: MemoryCard): Promise<MemoryCard> {
    return await this.iMemoryCardRepository.create(dto);
  }
}
