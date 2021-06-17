import mongoose, { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Phrase } from 'src/modules/frase/schemas/phrase.schema';
import { Meaning } from 'src/modules/significado/schemas/meaning.schema';
import { User } from 'src/modules/user/schemas/user.schema';

@Schema({ collection: 'memoryCard' })
export class MemoryCard extends Document {
  @Prop()
  word: string;
  @Prop()
  meanings: string[];
  @Prop()
  phrases: [
    {
      text: string,
      detail: string
    },
  ];
  @Prop()
  id_user: {
    type: mongoose.Schema.Types.ObjectId;
    ref: User;
  }
  @Prop()
  description: string;
  @Prop()
  level: Number;
  @Prop()
  step: Number;
  @Prop()
  date_view: Number;
}

export const MemoryCardSchema = SchemaFactory.createForClass(MemoryCard);
