import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DonutModule } from './donut/donut.module';

@Module({
  imports: [DonutModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
