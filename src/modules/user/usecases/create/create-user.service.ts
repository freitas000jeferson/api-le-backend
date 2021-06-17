import { Injectable } from '@nestjs/common';
import { CreateUserUseCase } from './create-user.usecase';
import { Request, Response } from 'express';
import { CreateUserDTO } from '../../dto/create-user.dto';
import { User } from '../../schemas/user.schema';

@Injectable()
export class CreateUserService {
  constructor(private createUserUseCase: CreateUserUseCase) {}
  async handle(dto: User, res: Response): Promise<Response> {
    try {
      const data = await this.createUserUseCase.execute(dto);

      return res.status(201).json({ data: data });
    } catch (error) {
      return res.status(400).json({
        message: error.message || 'Unexpected error.',
      });
    }
  }
}
