import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeProfileMongoRepository } from './repository/implementations/type-profile-mongo.repository';
import { TypeProfile, TypeProfileSchema } from './schemas/type-profile.schema';
import { TypeProfileController } from './type-profile.controller';
import { CreateTypeProfileService } from './usecases/create/create-type-profile.service';
import { CreateTypeProfileUseCase } from './usecases/create/create-type-profile.usecase';
import { FindAllTypeProfileService } from './usecases/find-all/find-all-type-profile.service';
import { FindAllTypeProfileUseCase } from './usecases/find-all/find-all-type-profile.usecase';
import { FindByIdTypeProfileService } from './usecases/find-by-id/find-by-id-type-profile.service';
import { FindByIdTypeProfileUseCase } from './usecases/find-by-id/find-by-id-type-profile.usecase';
import { UpdateTypeProfileService } from './usecases/update/update-type-profile.service';
import { UpdateTypeProfileUseCase } from './usecases/update/update-type-profile.usecase';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TypeProfile.name, schema: TypeProfileSchema },
    ]),
  ],
  controllers: [TypeProfileController],
  providers: [
    CreateTypeProfileService,
    CreateTypeProfileUseCase,
    FindAllTypeProfileService,
    FindAllTypeProfileUseCase,
    FindByIdTypeProfileService,
    FindByIdTypeProfileUseCase,
    UpdateTypeProfileService,
    UpdateTypeProfileUseCase,
    { provide: 'ITypeProfileRepository', useClass: TypeProfileMongoRepository },
  ],
  exports: [],
})
export class TypeProfileModule {}
