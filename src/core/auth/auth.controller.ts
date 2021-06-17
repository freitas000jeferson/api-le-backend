import { Controller, UseGuards, Request, Post } from '@nestjs/common';
import { AuthService } from './service/auth.service';
import { LocalAuthGuard } from './service/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req: any) {
    return this.authService.login(req.user);
  }

  @Post('refresh')
  async refresh(@Request() req: any) {
    return this.authService.refresh(req.body);
  }
}
