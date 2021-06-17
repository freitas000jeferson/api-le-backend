import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Meaning } from '../../schemas/meaning.schema';
import { IMeaningRepository } from '../i-meaning.repository';

export class MeaningMongoRepository implements IMeaningRepository {
  constructor(
    @InjectModel(Meaning.name)
    private meaningModel: Model<Meaning>,
  ) {}

  create(dto: Meaning) {
    const newComent = new this.meaningModel(dto);
    return newComent.save();
  }

  getAll() {
    return this.meaningModel.find();
  }

  getById(id: string) {
    return this.meaningModel.findById(id);
  }

  update(id: string, dto: Meaning) {
    return this.meaningModel.updateOne(
      { _id: id },
      {
        meaning: dto.meaning,
      },
    );
  }

  delete(id: string) {
    return this.meaningModel.deleteOne(
      { _id: id },
    );
  }
}
