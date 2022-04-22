import { Module } from '@nestjs/common';
import { ClientHandlerService } from './client-handler.service';
import { ClientHandlerController } from './client-handler.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientHandlerRepository } from './client-handler.repository';
import { ScrapingHandlerModule } from 'src/scraping-handler/scraping-handler.module';

@Module({
  imports:[ TypeOrmModule.forFeature([ClientHandlerRepository]), ScrapingHandlerModule],
  providers: [ClientHandlerService],
  controllers: [ClientHandlerController]
})
export class ClientHandlerModule {}
