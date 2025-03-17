import { Injectable } from "@nestjs/common";
import { TrainerRepository } from "./trainer.repository";

@Injectable()
export class TrainerService {
    constructor(
        private readonly trainerRepository: TrainerRepository
    ) {}

    async getTrainers(){
        return this.trainerRepository.getTrainers()
    }
}