import mongoose, { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Postt } from '../../postagem/schemas/post.schema';
import { User } from 'src/modules/user/schemas/user.schema';

@Schema({ collection: 'commentary' })
export class Commentary extends Document {
  @Prop()
  description: string;
  @Prop()
  likes: number;
  @Prop()
  responsable: {
    type: mongoose.Schema.Types.ObjectId;
    ref: User;
  };
}

export const CommentarySchema = SchemaFactory.createForClass(Commentary);
