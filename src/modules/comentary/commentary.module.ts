import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Commentary, CommentarySchema } from './schemas/commentary.schema';
import { CommentaryController } from './commentary.controller';
import { CommentaryMongoRepository } from './repository/implementations/commentary-mongo.repository';
import { CommentaryService } from './commentary.service';

import { FindByIdService } from './usecases/find-by-id/find-by-id.service';
import { FindByIdUseCase } from './usecases/find-by-id/find-by-id.usecase';
import { CreateUseCase } from './usecases/create/create.usecase';
import { CreateService } from './usecases/create/create.service';
import { UpdateUseCase } from './usecases/update/update.usecase';
import { UpdateService } from './usecases/update/update.service';
import { FindAllService } from './usecases/find-all/find-all.service';
import { FindAllUseCase } from './usecases/find-all/find-all.usecase';
import { DeleteService } from './usecases/delete/delete.service';
import { DeleteUseCase } from './usecases/delete/delete.usecase';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Commentary.name, schema: CommentarySchema },
    ]),
    UserModule,
  ],
  providers: [
    CommentaryService,
    FindByIdService,
    FindByIdUseCase,
    CreateService,
    CreateUseCase,
    UpdateUseCase,
    UpdateService,
    FindAllService,
    FindAllUseCase,
    DeleteService,
    DeleteUseCase,
    { provide: 'ICommentaryRepository', useClass: CommentaryMongoRepository },
  ],
  controllers: [CommentaryController],
  exports: [CommentaryService],
})
export class CommentaryModule {}
