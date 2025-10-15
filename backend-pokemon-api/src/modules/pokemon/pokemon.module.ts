import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pokemon } from './entities/pokemon.entity';
import { CaughtPokemon } from './entities/caught-pokemon.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pokemon, CaughtPokemon])],
  exports: [TypeOrmModule],
})
export class PokemonModule {}