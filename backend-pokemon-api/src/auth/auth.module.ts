import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { TrainerRepository } from 'src/trainers/trainer.repository';
import { Trainer } from 'src/trainers/entities/trainer.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrainerService } from 'src/trainers/trainer.service';
import { TrainerModule } from 'src/trainers/trainer.module';
import { AuthController } from './auth.controller';

@Module({
  imports: [TrainerModule, TypeOrmModule.forFeature([Trainer])],
  providers: [AuthService, TrainerService, TrainerRepository],
  controllers: [AuthController],
})
export class AuthModule {}