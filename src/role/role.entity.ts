import { Menu } from 'src/menu/menu.entity';
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToMany, JoinTable} from 'typeorm';

@Entity()
export class Role extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column() 
  role: string;

  @Column() 
  description: string;

  @Column({default : true})
  isActive: boolean;
  
  
  @ManyToMany(() => Menu, (menu) => menu.role)
  // @JoinTable({
  //   name: "menu_role",
  // })
  menu: Menu[];
}