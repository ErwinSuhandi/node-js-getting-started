import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class Bank extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column() 
  code: string;

  @Column()
  name: string;

  @Column({ default: true })
  isActive: boolean;
}