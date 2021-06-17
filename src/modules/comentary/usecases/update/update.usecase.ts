import { Inject, Injectable } from '@nestjs/common';
import { ICommentaryRepository } from '../../repository/i-commentary.repository';
import { Commentary } from '../../schemas/commentary.schema';
@Injectable()
export class UpdateUseCase {
  constructor(
    @Inject('ICommentaryRepository')
    private iCommentaryRepository: ICommentaryRepository,
  ) {}
  async execute(id: string, dto: Commentary): Promise<Commentary> {
    return await this.iCommentaryRepository.update(id, dto);
  }
}
