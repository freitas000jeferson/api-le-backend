import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { JwtAuthGuard } from 'src/core/auth/service/jwt.guard';
import { CreateTypeProfileDto } from './dto/create-type-profile.dto';
import { CreateTypeProfileService } from './usecases/create/create-type-profile.service';
import { FindAllTypeProfileService } from './usecases/find-all/find-all-type-profile.service';
import { FindByIdTypeProfileService } from './usecases/find-by-id/find-by-id-type-profile.service';
import { UpdateTypeProfileService } from './usecases/update/update-type-profile.service';

@Controller('typeprofiles')
export class TypeProfileController {
  constructor(
    private createTypeProfileService: CreateTypeProfileService,
    private findAllTypeProfileService: FindAllTypeProfileService,
    private findByIdTypeProfileService: FindByIdTypeProfileService,
    private updateTypeProfileService: UpdateTypeProfileService,
  ) {}
  @Post()
  async create(@Body() dto: CreateTypeProfileDto, @Res() res: Response) {
    return this.createTypeProfileService.handle(dto, res);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe)
    limit: number,
    @Query('page', new DefaultValuePipe(0), ParseIntPipe) page: number,
    @Res() res: Response,
  ) {
    return await this.findAllTypeProfileService.handle(page, limit, res);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findById(@Param('id') id: string, @Res() res: Response) {
    return await this.findByIdTypeProfileService.handle(id, res);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() dto: CreateTypeProfileDto,
    @Res() res: Response,
  ) {
    return this.updateTypeProfileService.handle(id, dto, res);
  }
}
