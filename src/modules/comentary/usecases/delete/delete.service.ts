import { Injectable } from '@nestjs/common';
import { DeleteUseCase } from './delete.usecase';
import { Request, Response } from 'express';

@Injectable()
export class DeleteService {
  constructor(private deleteUseCase: DeleteUseCase) {}
  async handle(id: string, req: Request, res: Response): Promise<Response> {
    const data = await this.deleteUseCase.execute(id);
    return res.status(200).send();
  }
}
