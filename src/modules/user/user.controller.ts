import {
  Body,
  Controller,
  DefaultValuePipe,
  Delete,
  Patch,
  Get,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Post,
  Query,
  Req,
  Res,
  UseGuards,
  Put,
} from '@nestjs/common';
import { CreateUserService } from './usecases/create/create-user.service';
import { Request, Response } from 'express';
import { JwtAuthGuard } from '../../core/auth/service/jwt.guard';
import { DeleteUserService } from './usecases/delete/delete-user.service';
import { FindAllUsersService } from './usecases/find-all/find-all-users.service';
import { FindUserByEmailService } from './usecases/find-by-email/find-user-by-email.service' 
import { UpdateUserDto } from './dto/update-user.dto';
import { UpdateUserService } from './usecases/update/update-user.service';

@Controller('users')
export class UserController {
  constructor(
    private createUserService: CreateUserService,
    private deleteUserService: DeleteUserService,
    private findAllUsersService: FindAllUsersService,
    private updateUserService: UpdateUserService,
    private findUserByEmailService: FindUserByEmailService
  ) {}

  @Post()
  async create(@Req() req: Request, @Res() res: Response) {
    return this.createUserService.handle(req.body, res);
  }

  //@UseGuards(JwtAuthGuard)
  @Get()
  async findAll(
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe)
    limit: number,
    @Query('page', new DefaultValuePipe(0), ParseIntPipe) page: number,
    @Res() res: Response,
  ) {
    return this.findAllUsersService.handle(page, limit, res);
  }

  @Get('/:email')
  async findUserByEmail(@Param('email') email: string) {
    return this.findUserByEmailService.handle(email);
  }

  //@UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateUserDto,
    @Res() res: Response,
  ) {
    return this.updateUserService.handle(id, dto, res);
  }

  //@UseGuards(JwtAuthGuard)
  @Delete(':id')
  async delete(@Param('id') id: string, @Res() res: Response) {
    return this.deleteUserService.handle(id, res);
  }
}
