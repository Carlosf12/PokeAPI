import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateTrainerDto } from 'src/modules/trainers/dtos/create.trainer.dto';
import { Trainer } from 'src/modules/trainers/entities/trainer.entity';
import { TrainerRepository } from 'src/modules/trainers/trainer.repository';
import { SignInDto } from '../trainers/dtos/signIn.trainer.dto';

@Injectable()
export class AuthService {
    constructor(private readonly trainerRepository: TrainerRepository) { }


    async signUp(newTrainer: CreateTrainerDto) {
      if (newTrainer.password !== newTrainer.confirmPassword) {
        throw new BadRequestException('Passwords do not match');
    }

    const existingEmail = await this.trainerRepository.getTrainerByEmail(newTrainer.email);
    if (existingEmail) {
        throw new BadRequestException('Email already in use');
    }

    const hashedPassword = await bcrypt.hash(newTrainer.password, 10);
    if (!hashedPassword) {
        throw new BadRequestException('Password could not be hashed');
    }

    const trainerEntity = new Trainer();
    trainerEntity.username = newTrainer.username;
    trainerEntity.email = newTrainer.email;
    trainerEntity.password = hashedPassword;
    trainerEntity.trainerName = newTrainer.trainerName;
    trainerEntity.favoritePokemon = newTrainer.favoritePokemon;
    trainerEntity.location = newTrainer.location;
    trainerEntity.bio = newTrainer.bio;
    trainerEntity.badgeCount = newTrainer.badgeCount;

    const createdTrainer = await this.trainerRepository.createTrainer(trainerEntity);

    const { password: confirmPassword, ...trainerWithoutPassword } = createdTrainer; 

    return {
        success: 'Trainer created successfully:',
        trainerWithoutPassword,
    };
  }

    async signIn(signInDto: SignInDto) {
        const { email, password } = signInDto;
        const trainer = await this.trainerRepository.getTrainerByEmail(email);
    
        if (!trainer) {
          throw new UnauthorizedException('Invalid credentials');
        }
    
        const isPasswordValid = await bcrypt.compare(password, trainer.password);
    
        if (!isPasswordValid) {
          throw new UnauthorizedException('Invalid credentials');
        }
    
        const { password: trainerPassword, ...trainerWithoutPassword } = trainer; 
    
        return {
          success: 'Trainer signed in successfully',
          trainerWithoutPassword 
        }
      }


}