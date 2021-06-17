import mongoose from 'mongoose';
import { TypeProfile } from 'src/modules/type-profiles/schemas/type-profile.schema';
export interface CreateUserDTO {
  name: string;
  avatar: string;
  email: string;
  password: string;
  id_type_profile: {
    type: mongoose.Schema.Types.ObjectId;
    ref: TypeProfile;
  };
}
