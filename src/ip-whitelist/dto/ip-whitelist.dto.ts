import { IsNotEmpty, Length } from 'class-validator';

export class IpWhitelistDto {
    id : number;

    @IsNotEmpty()
    iP: string;
  
    @IsNotEmpty()
    remark: string;
  
    @IsNotEmpty()
    isActive: boolean;
  }