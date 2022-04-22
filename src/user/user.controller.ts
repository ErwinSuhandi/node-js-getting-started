import { Controller, Get, Post, Body, Patch, Delete, Param, UseInterceptors, HttpException, HttpStatus } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { RoleService } from '../role/role.service';
import { UserDto } from './dto/user.dto';
import { ResponseInterceptor } from '../interceptor/response.interceptor';
import { stringify } from 'querystring';
import { error } from 'console';

@ApiTags('User')
@Controller('user')
@UseInterceptors(new ResponseInterceptor())
export class UserController {
    constructor(
        private readonly userService : UserService,
        private readonly roleService : RoleService,
    ){}

    @Get('')
    async getFromCore() {
        return  await this.userService.get();
    }

    @Post('')
    async pushToCore(@Body() user : UserDto) {
        const role = await this.roleService.getById(user.roleId);
        return  await this.userService.create(user, role);
      }

    @Patch('')
    async updateToCore(@Body() user : UserDto){
        const role = await this.roleService.getById(user.roleId);
        return await this.userService.update(user, role);
    }

    @Delete(':id')
    async deleteFromCore(@Param() id: number) : Promise<Boolean>{
        return await this.userService.delete(id);
    }

    @Patch('/changePassword')
    async changePassword(@Body() user : UserDto){
      const valid = await this.userService.validatePassword(user);
      if(valid != ""){
         throw new HttpException(valid, HttpStatus.BAD_REQUEST);
      }
        return await this.userService.changePassword(user);
    }
}
