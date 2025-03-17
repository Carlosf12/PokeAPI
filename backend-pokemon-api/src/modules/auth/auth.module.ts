import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { TrainerRepository } from 'src/modules/trainers/trainer.repository';
import { Trainer } from 'src/modules/trainers/entities/trainer.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrainerService } from 'src/modules/trainers/trainer.service';
import { TrainerModule } from 'src/modules/trainers/trainer.module';
import { AuthController } from './auth.controller';

@Module({
  imports: [TrainerModule, TypeOrmModule.forFeature([Trainer])],
  providers: [AuthService, TrainerService, TrainerRepository],
  controllers: [AuthController],
})
export class AuthModule {}