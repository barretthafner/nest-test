import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateDonutDto } from './dto/create-donut.dto';
import { UpdateDonutDto } from './dto/update-donut.dto';
import { Donut } from './entities/donut.entity';

@Injectable()
export class DonutService {
  constructor(
    @InjectRepository(Donut)
    private donutRepository: Repository<Donut>,
  ) {}

  create(createDonutDto: CreateDonutDto) {
    const donut = this.donutRepository.create(createDonutDto);
    return this.donutRepository.save(donut);
  }

  findAll() {
    return this.donutRepository.find();
  }

  findOne(id: string) {
    return this.donutRepository.findOneBy({ id });
  }

  update(id: string, updateDonutDto: UpdateDonutDto) {
    return this.donutRepository.update(id, updateDonutDto);
  }

  remove(id: string) {
    return this.donutRepository.delete(id);
  }
}
