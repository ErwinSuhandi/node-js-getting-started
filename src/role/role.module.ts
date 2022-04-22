import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleController } from './role.controller';
import { RoleService } from './role.service';
import { RoleRepository } from './role.repository';

@Module({
  imports:[ TypeOrmModule.forFeature([RoleRepository])],
  controllers: [RoleController],
  exports:[RoleService],
  providers: [RoleService]
})
export class RoleModule {}

