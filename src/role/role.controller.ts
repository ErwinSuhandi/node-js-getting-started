import { Controller, Get, Post, Body, Patch, Delete, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { RoleService } from './role.service';
import { RoleDto } from './dto/role.dto';


@ApiTags('Role')
@Controller('role')
export class RoleController {
    constructor(private readonly roleService : RoleService){}

    @Get('')
    async getFromCore() {
        return  await this.roleService.get();
      }

    @Post('')
    async pushToCore(@Body() role : RoleDto) {
        return  await this.roleService.create(role);
      }

    @Patch('')
    async updateToCore(@Body() role : RoleDto){
        return await this.roleService.update(role);
    }

    @Delete(':id')
    async deleteFromCore(@Param() id: number) : Promise<Boolean>{
        return await this.roleService.delete(id);
    }
}
