import { Injectable } from '@nestjs/common';
import { Request, Response } from 'express';
import { MemoryCard } from '../../schemas/memoryCard.schema';
import { CreateUseCase } from './create.usecase';

@Injectable()
export class CreateService {
  constructor(private findByIdUseCase: CreateUseCase) {}
  async handle(dto: MemoryCard, req: Request, res: Response): Promise<Response> {
    const data = await this.findByIdUseCase.execute(dto);
    return res.status(200).json({ data: data });
  }
}
