import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { FindUserByEmailService } from '../../../modules/user/usecases/find-by-email/find-user-by-email.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { RefreshTokenService } from './refresh-token.service';
import { RefreshTokenDto } from '../dto/refresh-token.dto';

@Injectable()
export class AuthService {
  constructor(
    private findUserByEmailService: FindUserByEmailService,
    private jwtService: JwtService,
    private refreshTokenService: RefreshTokenService,
  ) {}

  async validateUser(userEmail: string, userPassword: string) {
    try {
      const user = await this.findUserByEmailService.handle(userEmail);
      await this.verifyPassword(userPassword, user.password);
      // if (user && user.password === userPassword) {
      //   const { _id, name, email } = user;
      //   return { id: _id, name, email };
      // }
      user.password = undefined;
      return user;
    } catch (error) {
      throw new HttpException(
        'Wrong credentials provided',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
  private async verifyPassword(
    plainTextPassword: string,
    hashedPassword: string,
  ) {
    const isPasswordMatching = await bcrypt.compare(
      plainTextPassword,
      hashedPassword,
    );
    if (!isPasswordMatching) {
      throw new HttpException(
        'Wrong credentials provided',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async login(user: any) {
    const payload = await { email: user.email, sub: user.userId };

    const refresh_token = await this.createRefreshToken(payload);
    return {
      token_type: 'Bearer',
      access_token: this.jwtService.sign(payload),
      refresh_token: refresh_token.token,
    };
  }

  async refresh(token: any) {
    const res = await this.refreshTokenService.findByRefresToken(
      token.refresh_token,
    );
    if (!res) {
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }
    const date_now = new Date();
    const expiration = new Date(res.expiration_date);
    if (expiration < date_now) {
      await this.refreshTokenService.delete(res._id);
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }
    const payload = await { email: res.email };
    const refresh_token = await this.createRefreshToken(payload);
    return {
      token_type: 'bearer',
      access_token: this.jwtService.sign(payload),
      refresh_token: refresh_token.token,
    };
  }

  private async createRefreshToken(payload: any) {
    const isToken = await this.refreshTokenService.findByEmail(payload.email);

    const expiration_date = new Date();
    expiration_date.setSeconds(
      expiration_date.getSeconds() + jwtConstants.refreshTokenLife,
    );
    const valueHash = payload.email + expiration_date.toString();
    const token = await bcrypt.hash(valueHash, 10);
    const refresh = new RefreshTokenDto(
      payload.email,
      expiration_date.toISOString(),
      token,
    );
    if (isToken) {
      await this.refreshTokenService.update(isToken._id, refresh);
    } else {
      await this.refreshTokenService.createRefreshToken(refresh);
    }
    return refresh;
  }
}
