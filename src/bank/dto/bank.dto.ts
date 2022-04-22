import { IsNotEmpty, Length } from 'class-validator';

export class BankDto {
    id : number;

    @IsNotEmpty()
    code: string;
  
    @IsNotEmpty()
    name: string;
  
    @IsNotEmpty()
    isActive: boolean;
  }