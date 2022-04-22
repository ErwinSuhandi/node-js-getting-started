import { IsNotEmpty, Length } from 'class-validator';

export class ClientHandlerDto {
    id : number;
    
    @IsNotEmpty()
    name: string;
  
    @IsNotEmpty()
    endpoint: string;
  
    @IsNotEmpty()
    isActive: boolean;
  }