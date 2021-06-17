import { Injectable } from '@nestjs/common';
import { Response } from 'express';
import { UpdateUserDto } from '../../dto/update-user.dto';
import { UpdateUserUserCase } from './update-user.usercase';

@Injectable()
export class UpdateUserService {
  constructor(private updateUserUserCase: UpdateUserUserCase) {}
  async handle(id: string, dto: UpdateUserDto, res: Response) {
    try {
      await this.updateUserUserCase.execute(id, dto);
      dto.password = undefined;
      return res.status(201).json({ data: dto });
    } catch (error) {
      return res.status(400).json({
        message: error.message || 'Unexpected error.',
      });
    }
  }
}
