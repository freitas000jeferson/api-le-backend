import { Injectable } from '@nestjs/common';
import { DeleteUseCase } from './delete.usecase';
import { Request, Response } from 'express';

@Injectable()
export class DeleteService {
  constructor(private findByIdUseCase: DeleteUseCase) {}
  async handle(id: string, req: Request, res: Response): Promise<Response> {
    const data = await this.findByIdUseCase.execute(id);
    return res.status(200).json({ data: data });
  }
}
