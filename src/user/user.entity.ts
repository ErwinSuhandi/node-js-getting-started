import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { isNotEmpty, IsNotEmpty } from 'class-validator';
import { Role } from 'src/role/role.entity';
import { WhiteLabel } from 'src/white-label/white-label.entity';


@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @ManyToOne(() => Role, (role) => role.id)
  role: Role

  @ManyToMany(() => WhiteLabel)
  @JoinTable()
  whitelabels: WhiteLabel[]

  @Column() 
  username: string;

  @Column()
  oldPassword: string;

  @Column()
  password: string;

  @Column({default : true})
  isActive: boolean;
}