import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
@Schema({ collection: 'type_profiles' })
export class TypeProfile extends Document {
  @Prop()
  type_profile: string;
  @Prop()
  permissions: string[];
}

export const TypeProfileSchema = SchemaFactory.createForClass(TypeProfile);
