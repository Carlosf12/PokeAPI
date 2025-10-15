import { IsString, IsEmail, IsOptional, IsNumber, IsNotEmpty } from 'class-validator';
import { Match } from 'src/common/decorators/match.decorator';

export class CreateTrainerDto {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsEmail()
  email: string

  @IsNotEmpty()
  @IsString()
  password: string

  @IsNotEmpty()
  @IsString()
  @Match('password', { message: 'Passwords do not match' })
  confirmPassword: string;

  @IsOptional()
  @IsString()
  trainerName?: string;

  @IsOptional()
  @IsString()
  favoritePokemon?: string

  @IsOptional()
  @IsString()
  location?: string

  @IsOptional()
  @IsString()
  bio?: string

  @IsOptional()
  @IsNumber()
  badgeCount?: number;
}