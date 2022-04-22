import { Controller, Get, Post, Body, Patch, Delete, Param, UseInterceptors } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BankService } from './bank.service';
import { BankDto } from './dto/bank.dto';
import { ResponseInterceptor } from '../interceptor/response.interceptor';


@ApiTags('Bank')
@Controller('bank')
@UseInterceptors(new ResponseInterceptor())
export class BankController {
    constructor(private readonly bankService : BankService){}

    @Get('')
    async getFromCore() {
        return  await this.bankService.get();
      }

    @Post('')
    async pushToCore(@Body() bank : BankDto) {
        return  await this.bankService.create(bank);
      }

    @Patch('')
    async updateToCore(@Body() bank : BankDto){
        return await this.bankService.update(bank);
    }

    @Delete(':id')
    async deleteFromCore(@Param() id: number) : Promise<Boolean>{
        return await this.bankService.delete(id);
    }
}
