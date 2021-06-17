import { Inject, Injectable } from '@nestjs/common';
import { CreateTypeProfileDto } from '../../dto/create-type-profile.dto';
import { ITypeProfileRepository } from '../../repository/i-type-profile.repository';

@Injectable()
export class CreateTypeProfileUseCase {
  constructor(
    @Inject('ITypeProfileRepository')
    private iTypeProfileRepository: ITypeProfileRepository,
  ) {}
  async execute(dto: CreateTypeProfileDto) {
    return await this.iTypeProfileRepository.create(dto);
  }
}
