import { Inject, Injectable } from '@nestjs/common';
import { CreateTypeProfileDto } from '../../dto/create-type-profile.dto';
import { ITypeProfileRepository } from '../../repository/i-type-profile.repository';

@Injectable()
export class FindByIdTypeProfileUseCase {
  constructor(
    @Inject('ITypeProfileRepository')
    private iTypeProfileRepository: ITypeProfileRepository,
  ) {}
  async execute(id: string) {
    return await this.iTypeProfileRepository.findById(id);
  }
}
