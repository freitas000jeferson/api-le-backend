import { Injectable } from '@nestjs/common';
import { UpdateUseCase } from './update.usecase';
import { Request, Response } from 'express';
import { MemoryCard } from '../../schemas/memoryCard.schema';

@Injectable()
export class UpdateService {
  constructor(private findByIdUseCase: UpdateUseCase) {}
  async handle(id: string, dto: MemoryCard, req: Request, res: Response): Promise<Response> {
    const data = await this.findByIdUseCase.execute(id, dto);
    return res.status(200).json({ data: data });
  }
}
