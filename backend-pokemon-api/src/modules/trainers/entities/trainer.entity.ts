import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Trainer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({unique: true})
  username: string;

  @Column({unique: true})
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
}