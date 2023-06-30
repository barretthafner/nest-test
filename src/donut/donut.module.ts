import { Module } from '@nestjs/common';
import { DonutService } from './donut.service';
import { DonutController } from './donut.controller';

@Module({
  controllers: [DonutController],
  providers: [DonutService]
})
export class DonutModule {}
