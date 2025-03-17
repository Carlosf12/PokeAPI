import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateTrainerDto } from 'src/trainers/dtos/create.trainer.dto';
import { Trainer } from 'src/trainers/entities/trainer.entity';
import { TrainerRepository } from 'src/trainers/trainer.repository';

@Injectable()
export class AuthService {
    constructor(private readonly trainerRepository: TrainerRepository) { }

    async signUp(newTrainer: CreateTrainerDto) {
        if (newTrainer.password !== newTrainer.confirmPassword) {
            throw new BadRequestException('Passwords do not match')
        }
        const hashedPassword = await bcrypt.hash(newTrainer.password, 10)
        if (!hashedPassword) {
            throw new BadRequestException('Password could not be hashed')
        }

        const trainerEntity = new Trainer()
        trainerEntity.email = newTrainer.email
        trainerEntity.username = newTrainer.username
        trainerEntity.trainerName = newTrainer.trainerName
        trainerEntity.password = hashedPassword
        await this.trainerRepository.createTrainer(trainerEntity)
        const { password, confirmPassword, ...trainerWithoutPassword } = newTrainer
        return {
            success: 'Usuario registrado exitosamente:',
            trainerWithoutPassword,
        };
    }


}