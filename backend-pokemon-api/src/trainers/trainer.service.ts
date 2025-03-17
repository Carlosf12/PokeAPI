import { BadRequestException, Injectable } from "@nestjs/common";
import { TrainerRepository } from "./trainer.repository";
import { Trainer } from "./entities/trainer.entity";
import * as bcrypt from 'bcrypt';
import { CreateTrainerDto } from "./dtos/create.trainer.dto";

@Injectable()
export class TrainerService {
    constructor(
        private readonly trainerRepository: TrainerRepository
    ) {}

    async getTrainers(){
        return this.trainerRepository.getTrainers()
    }

    async getTrainerById(id: string) {
        return this.trainerRepository.getTrainerById(id)
    }

}