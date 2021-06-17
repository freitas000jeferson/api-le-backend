import { Inject, Injectable } from '@nestjs/common';
import { ICommentaryRepository } from '../../repository/i-commentary.repository';
import { Commentary } from '../../schemas/commentary.schema';
@Injectable()
export class DeleteUseCase {
  constructor(
    @Inject('ICommentaryRepository')
    private iCommentaryRepository: ICommentaryRepository,
  ) {}
  async execute(id: string): Promise<Commentary> {
    return await this.iCommentaryRepository.delete(id);
  }
}
