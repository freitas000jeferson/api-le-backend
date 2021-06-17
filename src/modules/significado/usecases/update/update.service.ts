import { Injectable } from '@nestjs/common';
import { Request, Response } from 'express';
import { Meaning } from '../../schemas/meaning.schema';
import { UpdateUseCase } from './update.usecase';

@Injectable()
export class UpdateService {
  constructor(private createUseCase: UpdateUseCase) {}
  async handle(id: string, dto: Meaning, req: Request, res: Response): Promise<Response> {
    const data = await this.createUseCase.execute(id, dto);
    return res.status(200).json({ data: data });
  }
}
