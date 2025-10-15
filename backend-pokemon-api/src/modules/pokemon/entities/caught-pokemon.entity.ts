import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { Pokemon } from './pokemon.entity';
import { Trainer } from '../../trainers/entities/trainer.entity';

@Entity()
export class CaughtPokemon {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Pokemon, (pokemon) => pokemon.caughtInstances, { eager: true })
  pokemon: Pokemon;

  @ManyToOne(() => Trainer, (trainer) => trainer.caughtPokemon)
  trainer: Trainer;

  @Column({ nullable: true })
  nickname: string;

  @Column({ default: 5 })
  level: number;

  @Column({ default: 0 })
  experience: number;

  @Column({ default: 100 })
  currentHP: number;

  @Column({ nullable: true })
  nature: string; // Adamant, Modest, Jolly, etc.

  @CreateDateColumn()
  caughtAt: Date;

  @Column({ default: false })
  isFavorite: boolean;

  @Column({ default: false })
  isInTeam: boolean;
}