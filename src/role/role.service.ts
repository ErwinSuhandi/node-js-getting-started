import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoleDto } from './dto/role.dto';
import { Role } from './role.entity';
import { RoleRepository } from './role.repository';

@Injectable()
export class RoleService {
    constructor( 
        @InjectRepository(RoleRepository)
        private readonly roleRepository: RoleRepository,){
    }

    get():Promise<Role[]>{
        return this.roleRepository.find({relations:["menu"]});
    }

    getById(id: number):Promise<Role>{
        return this.roleRepository.findOne(id);
    }

    async create(role : RoleDto):Promise<Role>{
        const newRoleService = new Role();
        newRoleService.role = role.role;
        newRoleService.isActive = role.isActive;
        newRoleService.description = role.description;
        console.log(newRoleService);
        return this.roleRepository.save(newRoleService);
    }

    async update(role : RoleDto):Promise<Role>{
        console.log(role);
        const current = await this.roleRepository.findOne(role.id);
        current.role = role.role;
        current.isActive = role.isActive;
        current.description =role.description;
        console.log(current);
        return await current.save();
    }

    async delete(id:number):Promise<boolean>{
        await this.roleRepository.delete(id);
        return true;
    }
}
