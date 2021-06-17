import { Inject, Injectable } from '@nestjs/common';
import { IPostRepository } from '../../repository/i-post.repository';
import { Postt } from '../../schemas/post.schema';
@Injectable()
export class UpdateUseCase {
  constructor(
    @Inject('IPostRepository')
    private iPostaRepository: IPostRepository,
  ) {}
  async execute(id: string, dto: Postt): Promise<Postt> {
    return await this.iPostaRepository.update(id, dto);
  }
}
