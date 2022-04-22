import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { WhiteLabel } from './white-label.entity';
import { WhiteLabelRepository } from './white-label.repository';
import { WhiteLabelDto } from './dto/white-label.dto';

@Injectable()
export class WhiteLabelService {
    constructor( 
        @InjectRepository(WhiteLabelRepository)
        private readonly whiteLabelRepository: WhiteLabelRepository,){
    }

    get():Promise<WhiteLabel[]>{
        return this.whiteLabelRepository.find();
    }

    getById(id: number):Promise<WhiteLabel>{
        return this.whiteLabelRepository.findOne(id);
    }

    async create(whiteLabel : WhiteLabelDto):Promise<WhiteLabel>{
        const newBankService = new WhiteLabel();
        newBankService.code = whiteLabel.code;
        newBankService.name = whiteLabel.name;
        newBankService.isActive = whiteLabel.isActive;
        return this.whiteLabelRepository.save(newBankService);
    }

    async update(whiteLabel : WhiteLabelDto):Promise<WhiteLabel>{
        const current = await this.whiteLabelRepository.findOne(whiteLabel.id);
        current.code = whiteLabel.code;
        current.name = whiteLabel.name;
        current.isActive = whiteLabel.isActive;

        return await current.save();
    }

    async delete(id:number):Promise<boolean>{
        await this.whiteLabelRepository.delete(id);
        return true;
    }
}
