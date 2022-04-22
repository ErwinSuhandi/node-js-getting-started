import { IsNotEmpty, IsString, MATCHES,  Length, Matches } from 'class-validator';

export class BankAccountDto {
    id : number;

    @IsNotEmpty()
    bankId: number;

    @IsNotEmpty()
    whiteLabelId: number;
  
    @IsNotEmpty()
    accountName: string;

    @IsNotEmpty()
    accountNumber: string;

    @IsNotEmpty()
    username: string;
  
    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    @IsNotEmpty()
    @Matches('password')
    confirmPassword: string;

    @IsNotEmpty()
    isActive: boolean;
  }

