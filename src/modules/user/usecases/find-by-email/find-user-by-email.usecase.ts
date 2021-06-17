import { Inject, Injectable } from '@nestjs/common';
import { IUserRepository } from '../../repository/i-user.repository';
import { User } from '../../schemas/user.schema';

@Injectable()
export class FindUserByEmailUseCase {
  constructor(
    @Inject('IUserRepository')
    private iUserRepository: IUserRepository,
  ) {}

  async execute(email: string): Promise<User> {
    return this.iUserRepository.findByEmail(email);
  }
}
