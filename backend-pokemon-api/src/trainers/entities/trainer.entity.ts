import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Trainer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column({ nullable: true })
  trainerName: string;

  @Column({ nullable: true })
  favoritePokemon: string;

  @Column({ nullable: true })
  location: string;

  @Column({ nullable: true })
  bio: string;

  @Column({ nullable: true })
  badgeCount: number;
}