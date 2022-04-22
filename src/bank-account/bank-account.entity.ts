import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne } from 'typeorm';
import { Bank } from 'src/bank/bank.entity';
import { WhiteLabel } from 'src/white-label/white-label.entity';
import { isNotEmpty, IsNumberString, IsNotEmpty } from 'class-validator';

@Entity()
export class BankAccount extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @ManyToOne(() => Bank, (bank) => bank.id)
  bank: Bank

  @IsNotEmpty()
  @ManyToOne(() => WhiteLabel, (whiteLabel) => whiteLabel.id)
  whiteLabel: WhiteLabel

  @Column() 
  accountName: string;

  @Column() 
  @IsNumberString()
  accountNumber: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column({ default: true })
  isActive: boolean;
}