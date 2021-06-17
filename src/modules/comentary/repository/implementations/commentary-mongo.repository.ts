import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Commentary } from '../../schemas/commentary.schema';
import { ICommentaryRepository } from '../i-commentary.repository';

export class CommentaryMongoRepository implements ICommentaryRepository {
  constructor(
    @InjectModel(Commentary.name)
    private commentaryModel: Model<Commentary>,
  ) {}

  create(dto: Commentary) {
    const newComent = new this.commentaryModel(dto);
    return newComent.save();
  }

  getAll() {
    return this.commentaryModel.find();
  }

  getById(id: string) {
    return this.commentaryModel.findById(id);
  }

  update(id: string, dto: Commentary) {
    return this.commentaryModel.updateOne(
      { _id: id },
      {
        description: dto.description,
        likes: dto.likes,
      },
    );
  }

  delete(id: string) {
    return this.commentaryModel.deleteOne({ _id: id });
  }
}
