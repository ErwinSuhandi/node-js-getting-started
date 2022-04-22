import { Controller, Get, Post, Body, Patch, Delete, Param, UseInterceptors } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { IpWhitelistService } from './ip-whitelist.service';
import { IpWhitelistDto } from './dto/ip-whitelist.dto';
import { ResponseInterceptor } from '../interceptor/response.interceptor';


@ApiTags('IpWhitelist')
@Controller('ipWhitelist')
@UseInterceptors(new ResponseInterceptor())
export class IpWhitelistController {
    constructor(private readonly ipWhitelistService : IpWhitelistService){}

    @Get('')
    async getFromCore() {
        return  await this.ipWhitelistService.get();
      }

    @Post('')
    async pushToCore(@Body() ipWhitelist : IpWhitelistDto) {
        return  await this.ipWhitelistService.create(ipWhitelist);
      }

    @Patch('')
    async updateToCore(@Body() ipWhitelist : IpWhitelistDto){
        return await this.ipWhitelistService.update(ipWhitelist);
    }

    @Delete(':id')
    async deleteFromCore(@Param() id: number) : Promise<Boolean>{
        return await this.ipWhitelistService.delete(id);
    }
}
