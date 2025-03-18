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

    async createTrainer(trainer: Trainer): Promise<Trainer> {
        const newTrainer = await this.trainerRepository.create(trainer)
        await this.trainerRepository.save(trainer)
        return this.trainerRepository.findOne({ where: { email: trainer.email}})
    }

    async getTrainerByEmail(email: string): Promise<Trainer | undefined> {
        return this.trainerRepository.findOne({ where: { email } });
    }

}