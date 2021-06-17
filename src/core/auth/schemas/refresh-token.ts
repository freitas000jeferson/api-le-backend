import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ collection: 'refresh_token' })
export class RefreshToken extends Document {
  @Prop()
  email: string;
  @Prop()
  expiration_date: string;
  @Prop()
  token: string;
}

export const RefreshTokenSchema = SchemaFactory.createForClass(RefreshToken);
