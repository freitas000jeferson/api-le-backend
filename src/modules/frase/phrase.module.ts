import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Phrase, PhraseSchema } from './schemas/phrase.schema';
import { PhraseController } from './phrase.controller';
import { PhraseMongoRepository } from './repository/implementations/phrase-mongo.repository';

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
import { PhraseService } from './phrase.service';
import { MemoryCardModule } from '../memory-card/memory-card.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Phrase.name, schema: PhraseSchema },
    ]),
  ],
  providers: [
    PhraseService,
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
    { provide: 'IPhraseRepository', useClass: PhraseMongoRepository },
    PhraseService,
  ],
  exports: [PhraseService],
  controllers: [PhraseController],
})
export class PhraseModule {}
