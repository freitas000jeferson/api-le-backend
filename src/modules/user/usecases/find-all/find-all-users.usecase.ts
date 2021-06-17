import { Inject, Injectable } from '@nestjs/common';
import { IUserRepository } from '../../repository/i-user.repository';

@Injectable()
export class FindAllUsersUseCase {
  constructor(
    @Inject('IUserRepository')
    private iUserRepository: IUserRepository,
  ) {}
  async execute(page: number, limit: number) {
    const options = {
      populate: [
        // Your foreign key fields to populate
      ],
      page: Number(page),
      limit: Number(limit),
    };
    const users = await this.iUserRepository.findAll(options);
    await users.forEach(element => (element.password = undefined));
    return users;
  }
}
