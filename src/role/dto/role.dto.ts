import { IsNotEmpty, Length } from 'class-validator';

export class RoleDto {
    id : number;
    
    @IsNotEmpty()
    role: string;

    @IsNotEmpty()
    description: string;
  
    @IsNotEmpty()
    isActive: boolean;
  }