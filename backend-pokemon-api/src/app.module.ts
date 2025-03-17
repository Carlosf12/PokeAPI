import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import typeorm from './config/typeorm.config'; 
import { TrainerModule } from './trainers/trainer.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [typeorm], 
      isGlobal: true, 
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) =>
        configService.get('typeorm'),
    }),
    TrainerModule, 
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}