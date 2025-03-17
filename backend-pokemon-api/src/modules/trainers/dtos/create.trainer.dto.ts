import { IsString, IsEmail, IsOptional, IsNumber, IsNotEmpty } from 'class-validator';

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
  confirmPassword: string

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