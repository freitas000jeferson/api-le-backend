import { Injectable } from '@nestjs/common';
import { FindAllUseCase } from './find-all.usecase';
import { Request, Response } from 'express';

@Injectable()
export class FindAllService {
  constructor(private createUseCase: FindAllUseCase) {}
  async handle(req: Request, res: Response): Promise<Response> {
    const data = await this.createUseCase.execute();
    return res.status(200).json({ data: data });
  }
}
