import { Inject, Injectable } from '@nestjs/common';
import { UpdateUserDto } from '../../dto/update-user.dto';
import { IUserRepository } from '../../repository/i-user.repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UpdateUserUserCase {
  constructor(
    @Inject('IUserRepository')
    private iUserRepository: IUserRepository,
  ) {}
  async execute(id: string, dto: UpdateUserDto) {
    if (dto.password) dto.password = await bcrypt.hash(dto.password, 10);
    return await this.iUserRepository.update(dto, id);
  }
}
