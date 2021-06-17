import mongoose, { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { TypeProfile } from 'src/modules/type-profiles/schemas/type-profile.schema';
@Schema({ collection: 'users' })
export class User extends Document {
  @Prop()
  name: string;
  @Prop()
  avatar: string;
  @Prop()
  email: string;
  @Prop()
  password: string;
  @Prop()
  id_type_profile: {
    type: mongoose.Schema.Types.ObjectId;
    ref: TypeProfile;
  };
}

export const UserSchema = SchemaFactory.createForClass(User);
