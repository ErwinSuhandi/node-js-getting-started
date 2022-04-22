import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class IpWhitelist extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column() 
  iP: string;

  @Column()
  remark: string;

  @Column({ default: true })
  isActive: boolean;
}