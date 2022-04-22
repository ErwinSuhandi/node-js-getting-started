import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientHandler } from './client-handler.entity';
import { ClientHandlerRepository } from './client-handler.repository';
import { ClientHandlerDto } from './dto/client-handler.dto';

@Injectable()
export class ClientHandlerService {
    constructor( 
        @InjectRepository(ClientHandlerRepository)
        private readonly clientHandlerRepository: ClientHandlerRepository,){
    }

    get():Promise<ClientHandler[]>{
        return this.clientHandlerRepository.find();
    }

    getById(id: number):Promise<ClientHandler>{
        return this.clientHandlerRepository.findOne(id);
    }

    async create(clientHandler : ClientHandlerDto):Promise<ClientHandler>{
        const newClientService = new ClientHandler();
        newClientService.name = clientHandler.name;
        newClientService.endpoint = clientHandler.endpoint;
        newClientService.isActive = clientHandler.isActive;

        return this.clientHandlerRepository.create(newClientService);
    }

    async update(clientHandler : ClientHandlerDto):Promise<ClientHandler>{
        const current = await this.clientHandlerRepository.findOne(clientHandler.id);
        current.name = clientHandler.name;
        current.endpoint = clientHandler.endpoint;
        current.isActive = clientHandler.isActive;

        return await current.save();
    }

    async delete(id:number):Promise<boolean>{
        await this.clientHandlerRepository.delete(id);
        return true;
    }
}
