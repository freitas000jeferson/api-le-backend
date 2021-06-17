import { Injectable } from '@nestjs/common';
import { Request, Response } from 'express';
import { Meaning } from '../../schemas/meaning.schema';
import { DeleteUseCase } from './delete.usecase';

@Injectable()
export class DeleteService {
  constructor(private deleteUseCase: DeleteUseCase) {}
  async handle(id: string, req: Request, res: Response): Promise<Response> {
    const data = await this.deleteUseCase.execute(id);
    return res.status(200).json({ data: data });
  }
}
