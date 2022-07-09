import { Process, Processor } from "@nestjs/bull";
import { Job } from "bull";

@Processor('message-queue')
export class MessageConsumerService {

    @Process('message-job')
    messageJob(job: Job<unknown>) {
        console.log(job.data)
    }

}