import { Module } from '@nestjs/common';
import { MeaningService } from './meaning.service';
import { MeaningController } from './meaning.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Meaning, MeaningSchema } from './schemas/meaning.schema';
import { FindByIdService } from './usecases/find-by-id/find-by-id.service';
import { FindByIdUseCase } from './usecases/find-by-id/find-by-id.usecase';
import { CreateService } from './usecases/create/create.service';
import { CreateUseCase } from './usecases/create/create.usecase';
import { UpdateUseCase } from './usecases/update/update.usecase';
import { UpdateService } from './usecases/update/update.service';
import { FindAllService } from './usecases/find-all/find-all.service';
import { FindAllUseCase } from './usecases/find-all/find-all.usecase';
import { DeleteService } from './usecases/delete/delete.service';
import { DeleteUseCase } from './usecases/delete/delete.usecase';
import { MeaningMongoRepository } from './repository/implementations/meaning-mongo.repository';
import { MemoryCardModule } from '../memory-card/memory-card.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Meaning.name, schema: MeaningSchema },
    ]),
  ],
  providers: [
    MeaningService,
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
    { provide: 'IMeaningRepository', useClass: MeaningMongoRepository },
  ],
  exports: [MeaningService],
  controllers: [MeaningController]
})
export class MeaningModule {}