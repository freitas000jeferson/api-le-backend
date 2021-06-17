import { Injectable } from '@nestjs/common';
import { Response } from 'express';
import { FindByIdTypeProfileUseCase } from './find-by-id-type-profile.usecase';

@Injectable()
export class FindByIdTypeProfileService {
  constructor(private findByIdTypeProfileUseCase: FindByIdTypeProfileUseCase) {}
  async handle(id: string, res: Response) {
    try {
      const data = await this.findByIdTypeProfileUseCase.execute(id);
      return res.status(200).json({ data: data });
    } catch (error) {
      return res.status(400).json({
        message: error.message || 'Unexpected error.',
      });
    }
  }
}
