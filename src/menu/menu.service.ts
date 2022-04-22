import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Menu } from './menu.entity';
import { MenuRepository } from './menu.repository';
import { MenuDto } from './dto/menu.dto';

@Injectable()
export class MenuService {
    constructor( 
        @InjectRepository(MenuRepository)
        private readonly menuRepository: MenuRepository,){
    }

    get():Promise<Menu[]>{
        return this.menuRepository.find({relations:["role"]});
    }

    getById(id: number):Promise<Menu>{
        return this.menuRepository.findOne(id);
    }

    async create(menu : MenuDto):Promise<Menu>{
        const newBankService = new Menu();
        newBankService.name = menu.name;
        newBankService.subMenu = menu.subMenu;
        newBankService.subMenuDescription = menu.subMenuDescription;
        newBankService.isActive = menu.isActive;
        return this.menuRepository.save(newBankService);
    }

    async update(menu : MenuDto):Promise<Menu>{
        const current = await this.menuRepository.findOne(menu.id);
        current.name = menu.name;
        current.subMenu = menu.subMenu;
        current.subMenuDescription = menu.subMenuDescription;
        current.isActive = menu.isActive;

        return await current.save();
    }

    async delete(id:number):Promise<boolean>{
        await this.menuRepository.delete(id);
        return true;
    }
}
