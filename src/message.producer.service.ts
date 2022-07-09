import { InjectQueue } from "@nestjs/bull";
import { Injectable } from "@nestjs/common";
import { Queue } from "bull";

@Injectable()
export class MessageProducerService {
    constructor(@InjectQueue('message-queue') private queue: Queue) { }

    async sendMessage(msg: string) {

        this.queue.add('message-job', {
            text: msg
        }, { delay: 10000 })
    }
}