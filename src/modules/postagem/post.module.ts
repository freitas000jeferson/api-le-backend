import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Postt, PostSchema } from './schemas/post.schema';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { CreateService } from './usecases/create/create.service';
import { CreateUseCase } from './usecases/create/create.usecase';
import { DeleteService } from './usecases/delete/delete.service';
import { DeleteUseCase } from './usecases/delete/delete.usecase';
import { FindAllService } from './usecases/find-all/find-all.service';
import { FindAllUseCase } from './usecases/find-all/find-all.usecase';
import { FindByIdService } from './usecases/find-by-id/find-by-id.service';
import { FindByIdUseCase } from './usecases/find-by-id/find-by-id.usecase';
import { UpdateService } from './usecases/update/update.service';
import { UpdateUseCase } from './usecases/update/update.usecase';
import { PostMongoRepository } from './repository/implementatios/post-mongo.repository';
import { UserModule } from '../user/user.module';
import { CommentaryModule } from '../comentary/commentary.module';


@Module({
  imports: [MongooseModule.forFeature([{name: Postt.name, schema: PostSchema}]), UserModule, CommentaryModule],
  providers: [
    PostService,
    CreateService,
    CreateUseCase,
    DeleteService,
    DeleteUseCase,
    FindAllService,
    FindAllUseCase,
    FindByIdService,
    FindByIdUseCase,
    UpdateService,
    UpdateUseCase,
    { provide: 'IPostRepository', useClass: PostMongoRepository },
  ],
  exports: [PostService],
  controllers: [PostController]
})
export class PostModule {}
