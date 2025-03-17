import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Trainer } from "./entities/trainer.entity";
import { TrainerController } from "./trainer.controller";
import { TrainerService } from "./trainer.service";
import { TrainerRepository } from "./trainer.repository";



@Module({
    imports: [TypeOrmModule.forFeature([Trainer])],
    controllers: [TrainerController],
    providers: [TrainerService, TrainerRepository],
    exports: [TrainerService, TrainerRepository],
  })
export class TrainerModule {}