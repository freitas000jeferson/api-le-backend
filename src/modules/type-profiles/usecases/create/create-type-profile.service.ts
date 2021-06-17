import { Injectable } from '@nestjs/common';
import { Response } from 'express';
import { CreateTypeProfileDto } from '../../dto/create-type-profile.dto';
import { CreateTypeProfileUseCase } from './create-type-profile.usecase';

@Injectable()
export class CreateTypeProfileService {
  constructor(private createTypeProfileUseCase: CreateTypeProfileUseCase) {}
  async handle(dto: CreateTypeProfileDto, res: Response) {
    try {
      const data = await this.createTypeProfileUseCase.execute(dto);
      return res.status(201).json({ data: data });
    } catch (error) {
      return res.status(400).json({
        message: error.message || 'Unexpected error.',
      });
    }
  }
}
