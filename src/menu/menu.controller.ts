import { Controller, Get, Post, Body, Patch, Delete, Param, UseInterceptors } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MenuService } from './menu.service';
import { MenuDto } from './dto/menu.dto';
import { ResponseInterceptor } from '../interceptor/response.interceptor';

@ApiTags('Menu')
@Controller('menu')
@UseInterceptors(new ResponseInterceptor())
export class MenuController {
    constructor(private readonly menuService : MenuService){}

    @Get('')
    async getFromCore() {
        return  await this.menuService.get();
      }

    @Post('')
    async pushToCore(@Body() menu : MenuDto) {
        return  await this.menuService.create(menu);
      }

    @Patch('')
    async updateToCore(@Body() menu : MenuDto){
        return await this.menuService.update(menu);
    }

    @Delete(':id')
    async deleteFromCore(@Param() id: number) : Promise<Boolean>{
        return await this.menuService.delete(id);
    }
}
