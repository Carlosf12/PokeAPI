import { Controller, Post, Body, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateTrainerDto } from 'src/modules/trainers/dtos/create.trainer.dto';
import { SignInDto } from '../trainers/dtos/signIn.trainer.dto';

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

    @Post('signin')
    async signIn(@Body() signInDto: SignInDto) {
      try {
        return await this.authService.signIn(signInDto);
      } catch (error) {
        if (error instanceof UnauthorizedException) {
          throw error;
        }
        throw new BadRequestException('Sign in failed');
      }
    }
}