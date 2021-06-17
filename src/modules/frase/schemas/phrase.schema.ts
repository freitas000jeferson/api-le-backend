import mongoose, { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ collection: 'phrase' })
export class Phrase extends Document {
  @Prop()
  description: string;
}

export const PhraseSchema = SchemaFactory.createForClass(Phrase);
