import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessageConsumerService } from './message.consumer.service';
import { MessageProducerService } from './message.producer.service';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: 'redis-15492.c264.ap-south-1-1.ec2.cloud.redislabs.com',
        port: 15492,
        password: '6ZIPS31TwgbXN3VgUQiorlhzXC6i5Tfd',
        username: 'default'
      },
    }),
    BullModule.registerQueue({
      name: 'message-queue',
    })
  ],
  controllers: [AppController],
  providers: [AppService, MessageProducerService, MessageConsumerService],
})
export class AppModule { }
