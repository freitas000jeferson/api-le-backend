import { Inject, Injectable } from '@nestjs/common';
import { CreateTypeProfileDto } from '../../dto/create-type-profile.dto';
import { ITypeProfileRepository } from '../../repository/i-type-profile.repository';

@Injectable()
export class FindAllTypeProfileUseCase {
  constructor(
    @Inject('ITypeProfileRepository')
    private iTypeProfileRepository: ITypeProfileRepository,
  ) {}
  async execute(page: number, limit: number) {
    const options = {
      page: Number(page),
      limit: Number(limit),
    };
    return await this.iTypeProfileRepository.findAll(options);
  }
}
