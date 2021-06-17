import { Inject, Injectable } from '@nestjs/common';
import { IPostRepository } from '../../repository/i-post.repository';
import { Postt } from '../../schemas/post.schema';
@Injectable()
export class FindByIdUseCase {
  constructor(
    @Inject('IPostRepository')
    private iPostRepository: IPostRepository,
  ) {}
  async execute(id: string): Promise<Postt> {
    return await this.iPostRepository.getById(id);
  }
}
