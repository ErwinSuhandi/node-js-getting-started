import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IpWhitelist } from './ip-whitelist.entity';
import { IpWhitelistRepository } from './ip-whitelist.repository';
import { IpWhitelistDto } from './dto/ip-whitelist.dto';

@Injectable()
export class IpWhitelistService {
    constructor( 
        @InjectRepository(IpWhitelistRepository)
        private readonly ipWhitelistepository: IpWhitelistRepository,){
    }

    get():Promise<IpWhitelist[]>{
        return this.ipWhitelistepository.find();
    }

    getById(id: number):Promise<IpWhitelist>{
        return this.ipWhitelistepository.findOne(id);
    }

    async create(ipWhitelist : IpWhitelistDto):Promise<IpWhitelist>{
        const newIpWhitelistService = new IpWhitelist();
        newIpWhitelistService.iP = ipWhitelist.iP;
        newIpWhitelistService.remark = ipWhitelist.remark;
        newIpWhitelistService.isActive = ipWhitelist.isActive;
        return this.ipWhitelistepository.save(newIpWhitelistService);
    }

    async update(ipWhitelist : IpWhitelistDto):Promise<IpWhitelist>{
        const current = await this.ipWhitelistepository.findOne(ipWhitelist.id);
        current.iP = ipWhitelist.iP;
        current.remark = ipWhitelist.remark;
        current.isActive = ipWhitelist.isActive;

        return await current.save();
    }

    async delete(id:number):Promise<boolean>{
        await this.ipWhitelistepository.delete(id);
        return true;
    }
}
