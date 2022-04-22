import { IsNotEmpty, Length } from 'class-validator';

export class MenuDto {
    id : number;

    @IsNotEmpty()
    name: string;
  
    @IsNotEmpty()
    subMenu: string;
    
    @IsNotEmpty()
    subMenuDescription: string;
  
    @IsNotEmpty()
    isActive: boolean;
  }