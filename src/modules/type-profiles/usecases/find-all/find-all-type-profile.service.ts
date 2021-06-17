import { Injectable } from '@nestjs/common';
import { Response } from 'express';
import { FindAllTypeProfileUseCase } from './find-all-type-profile.usecase';

@Injectable()
export class FindAllTypeProfileService {
  constructor(private findAllTypeProfileUseCase: FindAllTypeProfileUseCase) {}
  async handle(page: number, limit: number, res: Response) {
    try {
      const data = await this.findAllTypeProfileUseCase.execute(
        page * limit,
        limit,
      );
      return res.status(200).json({ data: data, page: page, limit: limit });
    } catch (error) {
      return res.status(400).json({
        message: error.message || 'Unexpected error.',
      });
    }
  }
}
