import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { v4 as uuid } from 'uuid'; 

@Entity()
export class Trainer {
  @PrimaryGeneratedColumn('uuid')
  id: string = uuid();

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

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