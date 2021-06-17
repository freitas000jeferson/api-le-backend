import { Injectable } from '@nestjs/common';
import { FindAllByDateUseCase } from './find-all-by-date.usecase';
import { Request, Response } from 'express';

@Injectable()
export class FindAllByDateService {
  constructor(private findAllUseCase: FindAllByDateUseCase) {}
  async handle(id_user: string, currentDate: Number, req: Request, res: Response): Promise<Response> {
    const data = await this.findAllUseCase.execute(id_user, currentDate);
    return res.status(200).json({ data: data });
  }
}
