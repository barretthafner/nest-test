import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DonutModule } from './donut/donut.module';

@Module({
  imports: [DonutModule],
  controllers: [AppController],
})
export class AppModule {}
