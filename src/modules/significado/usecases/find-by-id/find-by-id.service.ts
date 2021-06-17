import { Injectable } from '@nestjs/common';
import { Request, Response } from 'express';
import { FindByIdUseCase } from './find-by-id.usecase';

@Injectable()
export class FindByIdService {
  constructor(private findByIdUseCase: FindByIdUseCase) {}
  async handle(id: string, req: Request, res: Response): Promise<Response> {
    const data = await this.findByIdUseCase.execute(id);
    return res.status(200).json({ data: data });
  }
}
