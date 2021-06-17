import { Injectable } from '@nestjs/common';
import { FindAllByIdUserUseCase } from './find-all-by-id-user.usecase';
import { Request, Response } from 'express';

@Injectable()
export class FindAllByIdUserService {
  constructor(private findAllByIdUserUseCase: FindAllByIdUserUseCase) {}
  async handle(id_user: string, req: Request, res: Response): Promise<Response> {
    const data = await this.findAllByIdUserUseCase.execute(id_user);
    return res.status(200).json({ data: data });
  }
}
