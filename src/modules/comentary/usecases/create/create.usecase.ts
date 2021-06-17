import { Inject, Injectable } from '@nestjs/common';
import { ICommentaryRepository } from '../../repository/i-commentary.repository';
import { Commentary } from '../../schemas/commentary.schema';
@Injectable()
export class CreateUseCase {
  constructor(
    @Inject('ICommentaryRepository')
    private iCommentaryRepository: ICommentaryRepository,
  ) {}
  async execute(dto: Commentary): Promise<Commentary> {
    return await this.iCommentaryRepository.create(dto);
  }
}
