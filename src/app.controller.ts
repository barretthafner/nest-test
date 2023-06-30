import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return 'Hello!';
  }

  @Get('health')
  getHealth(): string {
    return "I'm healthy!";
  }
}
