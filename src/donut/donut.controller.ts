import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DonutService } from './donut.service';
import { CreateDonutDto } from './dto/create-donut.dto';
import { UpdateDonutDto } from './dto/update-donut.dto';

@Controller('donut')
export class DonutController {
  constructor(private readonly donutService: DonutService) {}

  @Post()
  create(@Body() createDonutDto: CreateDonutDto) {
    return this.donutService.create(createDonutDto);
  }

  @Get()
  findAll() {
    return this.donutService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.donutService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDonutDto: UpdateDonutDto) {
    return this.donutService.update(+id, updateDonutDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.donutService.remove(+id);
  }
}
