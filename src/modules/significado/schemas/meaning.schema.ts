import mongoose, { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { MemoryCard } from 'src/modules/memory-card/schemas/memoryCard.schema';

@Schema({ collection: 'meaning' })
export class Meaning extends Document {
  @Prop()
  meaning: string;
}

export const MeaningSchema = SchemaFactory.createForClass(Meaning);
