import { Injectable } from "@nestjs/common";
import { Trainer } from "./entities/trainer.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class TrainerRepository{
    constructor(
    @InjectRepository(Trainer)
    private readonly trainerRepository: Repository<Trainer>,
    ) {}

    async getTrainers(): Promise<Trainer[]>{
        return this.trainerRepository.find()
    }

    async getTrainerById(id: string): Promise<Trainer> {
        return this.trainerRepository.findOne({where: { id }})
    }


}