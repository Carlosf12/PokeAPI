import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { CaughtPokemon } from './caught-pokemon.entity';

@Entity()
export class Pokemon {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  pokemonNumber: number; // National Pokedex number (1-1025)

  @Column()
  name: string;

  @Column()
  species: string;

  @Column('simple-array')
  types: string[]; // ['Fire', 'Flying']

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  imageUrl: string;

  @Column({ default: 45 })
  baseHP: number;

  @Column({ default: 49 })
  baseAttack: number;

  @Column({ default: 49 })
  baseDefense: number;

  @Column({ default: 45 })
  baseSpeed: number;

  @Column({ default: 1 })
  generation: number;

  @Column({ default: false })
  isLegendary: boolean;

  @Column({ default: false })
  isMythical: boolean;

  @OneToMany(() => CaughtPokemon, (caughtPokemon: CaughtPokemon) => caughtPokemon.pokemon)
  caughtInstances: CaughtPokemon[];
}