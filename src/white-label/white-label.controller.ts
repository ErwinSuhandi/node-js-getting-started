import { Controller, Get, Post, Body, Patch, Delete, Param, UseInterceptors } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { WhiteLabelService } from './white-label.service';
import { WhiteLabelDto } from './dto/white-label.dto';
import { ResponseInterceptor } from '../interceptor/response.interceptor';

@ApiTags('White Label')
@Controller('white-label')
@UseInterceptors(new ResponseInterceptor())
export class WhiteLabelController {
    constructor(private readonly whiteLabelService : WhiteLabelService){}

    @Get('')
    async getFromCore() {
        return  await this.whiteLabelService.get();
      }

    @Post('')
    async pushToCore(@Body() whiteLabel : WhiteLabelDto) {
        return  await this.whiteLabelService.create(whiteLabel);
      }

    @Patch('')
    async updateToCore(@Body() whiteLabel : WhiteLabelDto){
        return await this.whiteLabelService.update(whiteLabel);
    }

    @Delete(':id')
    async deleteFromCore(@Param() id: number) : Promise<Boolean>{
        return await this.whiteLabelService.delete(id);
    }
}
