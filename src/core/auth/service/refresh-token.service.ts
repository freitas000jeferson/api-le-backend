import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RefreshTokenDto } from '../dto/refresh-token.dto';
import { RefreshToken } from '../schemas/refresh-token';

@Injectable()
export class RefreshTokenService {
  constructor(
    @InjectModel(RefreshToken.name)
    private refresTokenModel: Model<RefreshToken>,
  ) {}
  async createRefreshToken(refreshTokenDto: RefreshTokenDto) {
    const refresh = new this.refresTokenModel({
      email: refreshTokenDto.email,
      expiration_date: refreshTokenDto.expiration_date,
      token: refreshTokenDto.token,
    });
    return await refresh.save();
  }

  async findByEmail(email: string) {
    return await this.refresTokenModel.findOne({ email: email });
  }

  async findByRefresToken(token: string) {
    return await this.refresTokenModel.findOne({ token: token });
  }

  async delete(id: string) {
    return await this.refresTokenModel.deleteOne({ _id: id });
  }
  update(id: string, refreshTokenDto: RefreshTokenDto) {
    return this.refresTokenModel.updateOne(
      { _id: id },
      {
        email: refreshTokenDto.email,
        expiration_date: refreshTokenDto.expiration_date,
        token: refreshTokenDto.token,
      },
    );
  }
}
