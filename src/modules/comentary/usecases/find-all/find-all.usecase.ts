import { Inject, Injectable } from '@nestjs/common';
import { ICommentaryRepository } from '../../repository/i-commentary.repository';
import { Commentary } from '../../schemas/commentary.schema';
@Injectable()
export class FindAllUseCase {
  constructor(
    @Inject('ICommentaryRepository')
    private iCommentaryRepository: ICommentaryRepository,
  ) {}
  async execute(): Promise<Commentary> {
    return await this.iCommentaryRepository.getAll();
  }
}
