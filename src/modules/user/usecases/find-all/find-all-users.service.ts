import { Injectable } from '@nestjs/common';
import { Response } from 'express';
import { FindAllUsersUseCase } from './find-all-users.usecase';

@Injectable()
export class FindAllUsersService {
  constructor(private findAllUserUseCase: FindAllUsersUseCase) {}
  async handle(page: number, limit: number, res: Response) {
    try {
      const data = await this.findAllUserUseCase.execute(page * limit, limit);

      return res.status(200).json({ data: data, page: page, limit: limit });
    } catch (error) {
      return res.status(400).json({
        message: error.message || 'Unexpected error.',
      });
    }
  }
}
