import { Controller, Get, Post, Body, Patch, Delete, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BankAccountService } from './bank-account.service';
import { BankService } from '../bank/bank.service';
import { BankAccountDto } from './dto/bank-account.dto';
import { WhiteLabelService } from 'src/white-label/white-label.service';


@ApiTags('Bank Account')
@Controller('bank-account')
export class BankAccountController {
    constructor(
        private readonly bankAccountService : BankAccountService,
        private readonly bankService : BankService,
        private readonly whiteLabelService : WhiteLabelService,
    ){}

    @Get('')
    async getFromCore() {
        return  await this.bankAccountService.get();
      }

    @Post('')
    async pushToCore(@Body() bankAccount : BankAccountDto) {
        const bank = await this.bankService.getById(bankAccount.bankId);
        const whiteLabel = await this.whiteLabelService.getById(bankAccount.whiteLabelId);
        return  await this.bankAccountService.create(bankAccount, bank, whiteLabel);
      }

    @Patch('')
    async updateToCore(@Body() bankAccount : BankAccountDto){
        const bank = await this.bankService.getById(bankAccount.bankId);
        const whiteLabel = await this.whiteLabelService.getById(bankAccount.whiteLabelId);
        return await this.bankAccountService.update(bankAccount, bank,whiteLabel);
    }

    @Delete(':id')
    async deleteFromCore(@Param() id: number) : Promise<Boolean>{
        return await this.bankAccountService.delete(id);
    }
}
