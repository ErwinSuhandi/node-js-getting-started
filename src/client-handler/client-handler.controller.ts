import { Controller, Body, Get, Post, Patch, Delete, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ClientHandlerService } from './client-handler.service';
import { ClientHandlerDto } from './dto/client-handler.dto';

@ApiTags('Client Handler')
@Controller('client-handler')
export class ClientHandlerController {
    constructor(private readonly clientHandlerService : ClientHandlerService){}

    @Get('')
    async getFromCore() {
        return  await this.clientHandlerService.get();
      }

    @Post('')
    async pushToCore(@Body() clientHandler : ClientHandlerDto) {
        return  await this.clientHandlerService.create(clientHandler);
      }

    @Patch('')
    async updateToCore(@Body() clientHandler : ClientHandlerDto){
        return await this.clientHandlerService.update(clientHandler);
    }

    @Delete(':id')
    async deleteFromCore(@Param() id: number) : Promise<Boolean>{
        return await this.clientHandlerService.delete(id);
    }
}