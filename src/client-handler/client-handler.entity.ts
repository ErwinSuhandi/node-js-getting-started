import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class ClientHandler extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  endpoint: string;

  @Column()
  createdDate : Date;

  @Column()
  createdBy : string;

  @Column({ default: true })
  isActive: boolean;
}