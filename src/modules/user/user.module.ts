import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';
import { FindUserByEmailUseCase } from './usecases/find-by-email/find-user-by-email.usecase';
import { FindUserByEmailService } from './usecases/find-by-email/find-user-by-email.service';
import { UserMongoRepository } from './repository/implementations/user-mongo.repository';
import { UserController } from './user.controller';
import { CreateUserService } from './usecases/create/create-user.service';
import { CreateUserUseCase } from './usecases/create/create-user.usecase';
import { DeleteUserService } from './usecases/delete/delete-user.service';
import { DeleteUserUseCase } from './usecases/delete/delete-user.usecase';
import { FindAllUsersService } from './usecases/find-all/find-all-users.service';
import { FindAllUsersUseCase } from './usecases/find-all/find-all-users.usecase';
import { UpdateUserService } from './usecases/update/update-user.service';
import { UpdateUserUserCase } from './usecases/update/update-user.usercase';
import { TypeProfileModule } from '../type-profiles/type-profile.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    TypeProfileModule
  ],
  controllers: [UserController],
  providers: [
    CreateUserService,
    CreateUserUseCase,
    FindUserByEmailUseCase,
    FindUserByEmailService,
    DeleteUserService,
    DeleteUserUseCase,
    FindAllUsersService,
    FindAllUsersUseCase,
    UpdateUserService,
    UpdateUserUserCase,
    { provide: 'IUserRepository', useClass: UserMongoRepository },
  ],
  exports: [FindUserByEmailService],
})
export class UserModule {}
