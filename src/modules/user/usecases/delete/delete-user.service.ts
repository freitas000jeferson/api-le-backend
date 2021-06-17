import { Injectable } from '@nestjs/common';
import { Request, Response } from 'express';
import { DeleteUserUseCase } from './delete-user.usecase';

@Injectable()
export class DeleteUserService {
  constructor(private deleteUserUseCase: DeleteUserUseCase) {}
  async handle(id: string, res: Response) {
    try {
      await this.deleteUserUseCase.execute(id);
      return res.status(200).send();
    } catch (error) {
      return res.status(400).json({
        message: error.message || 'Unexpected error.',
      });
    }
  }
}
