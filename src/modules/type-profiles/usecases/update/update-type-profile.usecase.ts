import { Inject, Injectable } from '@nestjs/common';
import { CreateTypeProfileDto } from '../../dto/create-type-profile.dto';
import { ITypeProfileRepository } from '../../repository/i-type-profile.repository';

@Injectable()
export class UpdateTypeProfileUseCase {
  constructor(
    @Inject('ITypeProfileRepository')
    private iTypeProfileRepository: ITypeProfileRepository,
  ) {}
  async execute(id: string, dto: CreateTypeProfileDto) {
    return await this.iTypeProfileRepository.update(id, dto);
  }
}
