import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { MessageProducerService } from './message.producer.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private messageProducerService: MessageProducerService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('message')
  create(@Body('msg') msg): string {
    this.messageProducerService.sendMessage(msg);
    return 'SUCCESS'
  }
} 
