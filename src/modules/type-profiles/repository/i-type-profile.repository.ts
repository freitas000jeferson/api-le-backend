import { CreateTypeProfileDto } from '../dto/create-type-profile.dto';

export interface ITypeProfileRepository {
  create(dto: CreateTypeProfileDto);
  findById(id: string);
  findAll(options: any);
  update(id: string, dto: CreateTypeProfileDto);
}
