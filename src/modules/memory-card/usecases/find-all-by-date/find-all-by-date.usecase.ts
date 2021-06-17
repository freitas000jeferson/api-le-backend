import { Inject, Injectable } from '@nestjs/common';
import { IMemoryCardRepository } from '../../repository/i-memory-card.repository';
import { MemoryCard } from '../../schemas/memoryCard.schema';
@Injectable()
export class FindAllByDateUseCase {
  constructor(
    @Inject('IMemoryCardRepository')
    private iMemoryCardRepository: IMemoryCardRepository,
  ) {}
  async execute(id_user: string, currentDate: Number): Promise<MemoryCard> {
    return await this.iMemoryCardRepository.getAllByDate(id_user, currentDate);
  }
}
