import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateTrainerDto } from 'src/trainers/dtos/create.trainer.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('signup')
    async signUp(@Body() createTrainerDto: CreateTrainerDto) {
        try {
            return await this.authService.signUp(createTrainerDto);
        } catch (error) {
            if (error instanceof BadRequestException) {
                throw error; 
            }
            throw new BadRequestException('Registration failed');
        }
    }
}