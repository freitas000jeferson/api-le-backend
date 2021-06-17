import { Inject, Injectable } from '@nestjs/common';
import { IUserRepository } from '../../repository/i-user.repository';
import { User } from '../../schemas/user.schema';
import * as bcrypt from 'bcrypt';
import { CreateUserDTO } from '../../dto/create-user.dto';

@Injectable()
export class CreateUserUseCase {
  constructor(
    @Inject('IUserRepository')
    private iUserRepository: IUserRepository,
  ) {}
  async execute(dto: User): Promise<User> {
    const hash = await bcrypt.hash(dto.password, 10);
    dto.password = hash;
    return this.iUserRepository.create(dto);
  }
}
