import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Bank } from './bank.entity';
import { BankRepository } from './bank.repository';
import { BankDto } from './dto/bank.dto';

@Injectable()
export class BankService {
    constructor( 
        @InjectRepository(BankRepository)
        private readonly bankRepository: BankRepository,){
    }

    get():Promise<Bank[]>{
        return this.bankRepository.find();
    }

    getById(id: number):Promise<Bank>{
        return this.bankRepository.findOne(id);
    }

    async create(bank : BankDto):Promise<Bank>{
        const newBankService = new Bank();
        newBankService.code = bank.code;
        newBankService.name = bank.name;
        newBankService.isActive = bank.isActive;
        return this.bankRepository.save(newBankService);
    }

    async update(bank : BankDto):Promise<Bank>{
        const current = await this.bankRepository.findOne(bank.id);
        current.code = bank.code;
        current.name = bank.name;
        current.isActive = bank.isActive;

        return await current.save();
    }

    async delete(id:number):Promise<boolean>{
        await this.bankRepository.delete(id);
        return true;
    }
}
