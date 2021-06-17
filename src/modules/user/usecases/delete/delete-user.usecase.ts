import { Inject, Injectable } from '@nestjs/common';
import { IUserRepository } from '../../repository/i-user.repository';

@Injectable()
export class DeleteUserUseCase {
  constructor(
    @Inject('IUserRepository') private iUserRepository: IUserRepository,
  ) {}
  async execute(id: string) {
    return await this.iUserRepository.delete(id);
  }
}
