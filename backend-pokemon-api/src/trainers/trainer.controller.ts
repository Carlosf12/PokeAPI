import { Controller , Get, Request} from "@nestjs/common";
import { Request as ExpressRequest } from 'express'
import { TrainerService } from "./trainer.service";



@Controller('trainers')
export class TrainerController {
    constructor(
        private readonly trainerService: TrainerService
    ) {}

    @Get()
    async getTrainers(@Request() req: ExpressRequest,) {
        return this.trainerService.getTrainers()
    }
}