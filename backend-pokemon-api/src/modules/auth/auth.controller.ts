import { Controller, Post, Body, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateTrainerDto } from 'src/modules/trainers/dtos/create.trainer.dto';
import { SignInDto } from 'src/modules/trainers/dtos/signIn.trainer.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('signup')
    signUp(@Body() createTrainerDto: CreateTrainerDto) {
        return this.authService.signUp(createTrainerDto);
    }

    @Post('signin')
    signIn(@Body() signInDto: SignInDto) {
        return this.authService.signIn(signInDto);
    }
}