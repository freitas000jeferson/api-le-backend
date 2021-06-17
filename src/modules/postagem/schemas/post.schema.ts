import mongoose, { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Commentary } from '../../comentary/schemas/commentary.schema';
import { User } from 'src/modules/user/schemas/user.schema';

@Schema({ collection: 'post' })
export class Postt extends Document {
  @Prop()
  description: string;
  @Prop()
  title: string;
  @Prop()
  responsable: {
    type: mongoose.Schema.Types.ObjectId;
    ref: User;
  };
  @Prop()
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId;
      ref: Commentary;
    },
  ];
}

export const PostSchema = SchemaFactory.createForClass(Postt);
