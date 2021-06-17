import { Injectable } from '@nestjs/common';
import { FindByIdUseCase } from './find-by-id.usecase';
import { Request, Response } from 'express';

@Injectable()
export class FindByIdService {
  constructor(private createUseCase: FindByIdUseCase) {}
  async handle(id: string, req: Request, res: Response): Promise<Response> {
    const data = await this.createUseCase.execute(id);
    return res.status(200).json({ data: data });
  }
}
