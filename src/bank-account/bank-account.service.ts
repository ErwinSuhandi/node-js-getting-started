import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BankAccount } from './bank-account.entity';
import { Bank } from '../bank/bank.entity';
import { BankAccountRepository } from './bank-account.repository';
import { BankAccountDto } from './dto/bank-account.dto';
import { WhiteLabel } from 'src/white-label/white-label.entity';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class BankAccountService {
    constructor( 
        @InjectRepository(BankAccountRepository)
        private readonly bankAccountRepository: BankAccountRepository,
        private readonly authService : AuthService, ){
    }

    get():Promise<BankAccount[]>{
        return this.bankAccountRepository.find();
    }

    getById(id: number):Promise<BankAccount>{
        return this.bankAccountRepository.findOne(id);
    }

    async create(bankAccount : BankAccountDto, bank : Bank, whiteLabel : WhiteLabel):Promise<BankAccount>{
    //    const password = this.authService.encodePasswordCrypto(bankAccount.password);
    //    console.log(password);

        const newBanKccountkService = new BankAccount();
        newBanKccountkService.bank = bank;
        newBanKccountkService.whiteLabel = whiteLabel;
        newBanKccountkService.accountName = bankAccount.accountName;
        newBanKccountkService.accountNumber = bankAccount.accountNumber;
        newBanKccountkService.username = bankAccount.username;
        newBanKccountkService.password = bankAccount.password;
        newBanKccountkService.isActive = true;
        return this.bankAccountRepository.save(newBanKccountkService);
    }

    async update(bankAccount : BankAccountDto,  bank : Bank, whiteLabel : WhiteLabel):Promise<BankAccount>{
        const current = await this.bankAccountRepository.findOne(bankAccount.id);
        current.bank = bank;
        current.whiteLabel = whiteLabel;
        current.accountName = bankAccount.accountName;
        current.accountNumber = bankAccount.accountNumber;
        current.username = bankAccount.username;
        current.password = bankAccount.password;
        current.isActive = bankAccount.isActive;

        return await current.save();
    }

    async delete(id:number):Promise<boolean>{
        await this.bankAccountRepository.delete(id);
        return true;
    }
}
