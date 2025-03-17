import { Controller , Get, Param, Post, Request} from "@nestjs/common";
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

    @Get(':id')
    async getTrainerById(@Param('id') id: string){
        return this.trainerService.getTrainerById(id)
    }
}