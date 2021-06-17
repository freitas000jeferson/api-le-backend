import { Injectable } from '@nestjs/common';
import { User } from '../../schemas/user.schema';
import { FindUserByEmailUseCase } from './find-user-by-email.usecase';

@Injectable()
export class FindUserByEmailService {
  constructor(private findUserByEmailUseCase: FindUserByEmailUseCase) {}
  handle(email: string): Promise<User> {
    return this.findUserByEmailUseCase.execute(email);
  }
}
