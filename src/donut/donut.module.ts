import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DonutService } from './donut.service';
import { DonutController } from './donut.controller';
import { Donut } from './entities/donut.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Donut])],
  controllers: [DonutController],
  providers: [DonutService],
})
export class DonutModule {}
