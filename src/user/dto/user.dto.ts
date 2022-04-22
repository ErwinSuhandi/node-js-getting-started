import { IsNotEmpty, IsString, MATCHES,  Length, Matches } from 'class-validator';
import { WhiteLabel } from 'src/white-label/white-label.entity';

export class UserDto {
    id : number;

    @IsNotEmpty()
    roleId: number;
  
    @IsNotEmpty()
    username: string;
  
    @IsString()
    @IsNotEmpty()
    oldPassword: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    @IsNotEmpty()
    @Matches('password')
    confirmPassword: string;

    @IsNotEmpty()
    isActive: boolean;

    whitelabels: WhiteLabel[];
  }

