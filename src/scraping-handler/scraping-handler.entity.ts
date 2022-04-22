import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class ScrapingHandler extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' }) 
  tanggal: Date;

  @Column()
  keterangan: string;

  @Column()
  cabang: string;

  @Column({ type:"decimal", precision: 18, scale: 2 })
  nominal: number;

  @Column()
  type: string;

  @Column({ type:"decimal", precision: 18, scale: 2 })
  saldo: number;

  @Column({ default: true })
  isActive: boolean;
}