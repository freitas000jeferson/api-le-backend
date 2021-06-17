import { Inject, Injectable } from '@nestjs/common';
import { IMemoryCardRepository } from '../../repository/i-memory-card.repository';
import { MemoryCard } from '../../schemas/memoryCard.schema';
@Injectable()
export class FindAllByIdUserUseCase {
  constructor(
    @Inject('IMemoryCardRepository')
    private iMemoryCardRepository: IMemoryCardRepository,
  ) {}
  async execute(id_user: string): Promise<MemoryCard> {
    return await this.iMemoryCardRepository.getAllByUserId(id_user);
  }
}
