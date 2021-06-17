import { Injectable } from '@nestjs/common';
import { Response } from 'express';
import { CreateTypeProfileDto } from '../../dto/create-type-profile.dto';
import { UpdateTypeProfileUseCase } from './update-type-profile.usecase';

@Injectable()
export class UpdateTypeProfileService {
  constructor(private updateTypeProfileUseCase: UpdateTypeProfileUseCase) {}
  async handle(id: string, dto: CreateTypeProfileDto, res: Response) {
    try {
      const data = await this.updateTypeProfileUseCase.execute(id, dto);
      return res.status(200).json({ data: dto });
    } catch (error) {
      return res.status(400).json({
        message: error.message || 'Unexpected error.',
      });
    }
  }
}
