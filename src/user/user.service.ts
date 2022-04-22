import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Role } from '../role/Role.entity';
import { UserRepository } from './user.repository';
import { UserDto } from './dto/user.dto';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class UserService {
    constructor( 
        @InjectRepository(UserRepository)
        private readonly userRepository: UserRepository,
        private readonly authService : AuthService,){
    }

    get():Promise<User[]>{
        return this.userRepository.find();
    }

    getById(id: number):Promise<User>{
        return this.userRepository.findOne(id);
    }

    async create(user : UserDto, role : Role):Promise<User>{
        const password = this.authService.encodePassword(user.password);

        const newUserService = new User();
        newUserService.role = role;
        newUserService.whitelabels  = user.whitelabels;
        newUserService.username = user.username;
        newUserService.oldPassword = password;
        newUserService.password = password;
        newUserService.isActive = user.isActive;

        return this.userRepository.save(newUserService);
    }

    async update(user : UserDto,  role : Role):Promise<User>{
        const current = await this.userRepository.findOne(user.id);
        current.role = role;
        current.username = user.username;
        current.oldPassword = user.oldPassword;
        current.password = user.password;
        current.isActive = user.isActive;

        return await current.save();
    }

    async delete(id:number):Promise<boolean>{
        await this.userRepository.delete(id);
        return true;
    }

    async validatePassword(user: UserDto){
        const current = await this.userRepository.findOne(user.id);
        let message = "";

        const matched = this.authService.comparePasswords(user.oldPassword, current.oldPassword);
        console.log(matched);
        //if(current.oldPassword != user.oldPassword)
        if(!matched)
        {
            message =  "Old Password doesn't match with Password";
        }
        return message;
    }

   async changePassword(user : UserDto): Promise<User>{
        const password = this.authService.encodePassword(user.password);
        const current = await this.userRepository.findOne(user.id);
        current.oldPassword = password;
        current.password = password

        return await current.save();
   }

}
