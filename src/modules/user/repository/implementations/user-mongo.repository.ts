import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../../schemas/user.schema';
import { IUserRepository } from '../i-user.repository';

export class UserMongoRepository implements IUserRepository {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
  ) {}
  async create(dto: User): Promise<User> {
    const user = new this.userModel(dto);
    return user.save();
  }
  async findById(id: string): Promise<User> {
    return await this.userModel.findById(id).exec();
  }
  async findByEmail(email: string): Promise<User> {
    return await this.userModel.findOne({ email: email }).exec();
  }
  async update(dto: any, id: string): Promise<User> {
    return await this.userModel.updateOne({ _id: id }, dto).exec();
  }

  async delete(id: string): Promise<void> {
    await this.userModel.deleteOne({ _id: id });
    return;
  }
  async findAll(options: any) {
    return await this.userModel
      .find({})
      .skip(options.page) // Always apply 'skip' before 'limit'
      .limit(options.limit);
  }
}
