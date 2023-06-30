import { Injectable } from '@nestjs/common';
import { CreateDonutDto } from './dto/create-donut.dto';
import { UpdateDonutDto } from './dto/update-donut.dto';

@Injectable()
export class DonutService {
  create(createDonutDto: CreateDonutDto) {
    return 'This action adds a new donut';
  }

  findAll() {
    return `This action returns all donut`;
  }

  findOne(id: number) {
    return `This action returns a #${id} donut`;
  }

  update(id: number, updateDonutDto: UpdateDonutDto) {
    return `This action updates a #${id} donut`;
  }

  remove(id: number) {
    return `This action removes a #${id} donut`;
  }
}
