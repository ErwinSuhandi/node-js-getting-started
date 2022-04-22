import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ScrapingHandlerDto } from './dto/scraping-handler.dto';
import { ScrapingHandler } from './scraping-handler.entity';
import { ScrapingHandlerRepository } from './scraping-handler.repository';

@Injectable()
export class ScrapingHandlerService {
    constructor( 
        @InjectRepository(ScrapingHandlerRepository)
        private readonly scrapingHandlerRepository: ScrapingHandlerRepository,){
    }

    get():Promise<ScrapingHandler[]>{
        return this.scrapingHandlerRepository.find();
    }

    getById(id: number):Promise<ScrapingHandler>{
        return this.scrapingHandlerRepository.findOne(id);
    }

    async create(scrapinghandlers : ScrapingHandlerDto[]):Promise<ScrapingHandler[]>{
        const arrscrapingHandler = new Array<ScrapingHandler>();

        scrapinghandlers.forEach(function (value) {
            const newScrapingService = new ScrapingHandler();
            newScrapingService.tanggal = new Date();
            newScrapingService.keterangan = value.ket;
            newScrapingService.cabang = value.cab;
            newScrapingService.nominal = parseFloat(value.mutasi.nominal.toString().replace(/,/g,''));
            newScrapingService.type = value.mutasi.type;
            newScrapingService.saldo = parseFloat(value.saldo.toString().replace(',',''));
            newScrapingService.isActive = true;

            arrscrapingHandler.push(newScrapingService);
            //const aaa = this.scrapingHandlerRepository.create(newScrapingService);
          }); 

        return this.scrapingHandlerRepository.save(arrscrapingHandler);
    }

    async create1(id:number, tanggal:Date, keterangan: string, cabang: string,
                 nominal:number, type:string, saldo:number, isActive:boolean):Promise<ScrapingHandler>{
        const newScrapingService = new ScrapingHandler();
        newScrapingService.id = id;
        newScrapingService.tanggal = tanggal;
        newScrapingService.keterangan = keterangan;
        newScrapingService.cabang = cabang;
        newScrapingService.nominal = nominal;
        newScrapingService.type = type;
        newScrapingService.saldo = saldo;
        newScrapingService.isActive = isActive;

        return this.scrapingHandlerRepository.create(newScrapingService);
    }

    async update(id:number, tanggal:Date, keterangan: string, cabang: string,
                 nominal:number, type:string, saldo:number, isActive:boolean):Promise<ScrapingHandler>{
        const current = await this.scrapingHandlerRepository.findOne(id);

        current.tanggal = tanggal;
        current.keterangan = keterangan;
        current.cabang = cabang;
        current.nominal = nominal;
        current.type = type;
        current.saldo = saldo;
        current.isActive = isActive;

        return await current.save();
    }

    async delete(id:number):Promise<boolean>{
        await this.scrapingHandlerRepository.delete(id);
        return true;
    }
}
