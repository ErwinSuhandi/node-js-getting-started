import { Role } from 'src/role/role.entity';
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToMany, JoinTable } from 'typeorm';

@Entity()
export class Menu extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column() 
  name: string;

  @Column()
  subMenu: string;

  @Column()
  subMenuDescription: string;

  @Column({ default: true })
  isActive: boolean;

  @ManyToMany(() => Role, (role) => role.menu)
  @JoinTable()
  role: Role[];
}