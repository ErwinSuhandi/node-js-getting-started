import { Module } from '@nestjs/common';
import { MenuController } from './menu.controller';
import { MenuService } from './menu.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MenuRepository } from './menu.repository';

@Module({
  imports:[ TypeOrmModule.forFeature([MenuRepository])],
  controllers: [MenuController],
  providers: [MenuService]
})
export class MenuModule {}
