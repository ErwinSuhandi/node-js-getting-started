import { IsNotEmpty, Length } from 'class-validator';

export class WhiteLabelDto {
    id : number;

    @IsNotEmpty()
    code: string;
  
    @IsNotEmpty()
    name: string;
  
    @IsNotEmpty()
    isActive: boolean;
  }