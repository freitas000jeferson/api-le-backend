import { Inject, Injectable } from '@nestjs/common';
import { IPostRepository } from '../../repository/i-post.repository';
import { Postt } from '../../schemas/post.schema';
@Injectable()
export class CreateUseCase {
  constructor(
    @Inject('IPostRepository')
    private iPostRepository: IPostRepository,
  ) {}
  async execute(dto: Postt): Promise<Postt> {
    return await this.iPostRepository.create(dto);
  }
}
