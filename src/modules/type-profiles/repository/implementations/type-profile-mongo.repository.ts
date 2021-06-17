import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTypeProfileDto } from '../../dto/create-type-profile.dto';
import { TypeProfile } from '../../schemas/type-profile.schema';
import { ITypeProfileRepository } from '../i-type-profile.repository';

export class TypeProfileMongoRepository implements ITypeProfileRepository {
  constructor(
    @InjectModel(TypeProfile.name)
    private model: Model<TypeProfile>,
  ) {}
  async create(dto: CreateTypeProfileDto) {
    const aux = new this.model(dto);
    return await aux.save();
  }
  async findById(id: string) {
    return await this.model.findById(id).exec();
  }
  async update(id: string, dto: CreateTypeProfileDto) {
    return await this.model.updateOne({ _id: id }, dto).exec();
  }
  async findAll(options: any) {
    return await this.model
      .find({})
      .skip(options.page) // Always apply 'skip' before 'limit'
      .limit(options.limit);
  }
}
