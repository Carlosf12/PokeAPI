import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { OneToMany } from 'typeorm';
import { CaughtPokemon } from '../../pokemon/entities/caught-pokemon.entity';

@Entity()
export class Trainer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  username: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  trainerName?: string;

  @Column({ nullable: true })
  favoritePokemon?: string;

  @Column({ nullable: true })
  location?: string;

  @Column({ nullable: true })
  bio?: string;

  @Column({ nullable: true })
  badgeCount?: number;

  @OneToMany(() => CaughtPokemon, (caughtPokemon) => caughtPokemon.trainer)
  caughtPokemon: CaughtPokemon[];
}