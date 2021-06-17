import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { throws } from 'assert';
import { MemoryCard } from './schemas/memoryCard.schema';
import { Request, Response } from 'express';
import { MemoryCardService } from './memory-card.service';
import { CreateService } from './usecases/create/create.service';
import { FindAllService } from './usecases/find-all/find-all.service';
import { FindByIdService } from './usecases/find-by-id/find-by-id.service';
import { FindAllByIdUserService } from './usecases/find-all-by-id-user/find-all-by-id-user.service'
import { FindAllByDateService } from './usecases/find-all-by-date/find-all-by-date.service'
import { DeleteService } from './usecases/delete/delete.service';
import { UpdateService } from './usecases/update/update.service';
import { JwtAuthGuard } from 'src/core/auth/service/jwt.guard';

@Controller('memoryCards')
export class MemoryCardController {
  constructor(
    private memoryCardService: MemoryCardService,
    private createService: CreateService,
    private findAllService: FindAllService,
    private findByIdService: FindByIdService,
    private updateService: UpdateService,
    private deleteService: DeleteService,
    private findAllByIdUserService: FindAllByIdUserService,
    private findAllByDateService: FindAllByDateService
  ) {}

  //@UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() dto: MemoryCard, @Req() req: Request, @Res() res: Response) {
    return this.createService.handle(dto, req, res);
  }

  //@UseGuards(JwtAuthGuard)
  @Get()
  getAll(@Req() req: Request, @Res() res: Response) {
    return this.findAllService.handle(req, res);
  }

  //@UseGuards(JwtAuthGuard)
  @Get(':id')
  getById(@Param('id') id: string, @Req() req: Request, @Res() res: Response) {
    return this.findByIdService.handle(id, req, res);
  }

  //@UseGuards(JwtAuthGuard)
  @Get('/user/:id_user')
  getByIdUser(@Param('id_user') id_user: string, @Req() req: Request, @Res() res: Response) {
    return this.findAllByIdUserService.handle(id_user, req, res);
  }

  //@UseGuards(JwtAuthGuard)
  @Get('/user/:id_user/date/:currentDate')
  getByIdDate(@Param('id_user') id_user: string, @Param('currentDate') currentDate: Number, @Req() req: Request, @Res() res: Response) {
    return this.findAllByDateService.handle(id_user, currentDate, req, res);
  }

  //@UseGuards(JwtAuthGuard)
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() dto: MemoryCard,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    return this.updateService.handle(id, dto, req, res);
  }

  //@UseGuards(JwtAuthGuard)
  @Delete(':id')
  delete(@Param('id') id: string, @Req() req: Request, @Res() res: Response) {
    return this.deleteService.handle(id, req, res);
  }
}
