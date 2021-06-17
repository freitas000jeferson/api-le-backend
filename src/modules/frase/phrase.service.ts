import { Injectable } from '@nestjs/common';
import { Phrase } from './schemas/phrase.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class PhraseService {
  constructor(
    @InjectModel(Phrase.name)
    private phraseModel: Model<Phrase>,
  ) {}

  create(dto: Phrase) {
    const newPhrase = new this.phraseModel(dto);
    return newPhrase.save();
  }

  getAll() {
    return this.phraseModel.find();
  }

  getById(id: string) {
    return this.phraseModel.findById(id);
  }

  update(id: string, dto: Phrase) {
    return this.phraseModel.updateOne(
      { _id: id },
      {
        description: dto.description,
      },
    );
  }

  delete(id: string) {
    return this.phraseModel.deleteOne(
      { _id: id },
    );
  }
}
