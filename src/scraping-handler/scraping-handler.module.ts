import { Module } from '@nestjs/common';
import { ScrapingHandlerService } from './scraping-handler.service';
import { ScrapingHandlerController } from './scraping-handler.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScrapingHandlerRepository } from './scraping-handler.repository';

@Module({
  imports:[ TypeOrmModule.forFeature([ScrapingHandlerRepository])],
  providers: [ScrapingHandlerService],
  exports:[ScrapingHandlerService],
  controllers: [ScrapingHandlerController]
})
export class ScrapingHandlerModule {}
