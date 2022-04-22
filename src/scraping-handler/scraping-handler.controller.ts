import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ScrapingHandlerService } from './scraping-handler.service';
import { ScrapingHandlerDto } from './dto/scraping-handler.dto';


@ApiTags('Scraping Handler')
@Controller('scraping-handler')
export class ScrapingHandlerController {
    constructor(private readonly scrapingHandlerService : ScrapingHandlerService){}
    
    @Post('')
    async pushToCore(@Body() scrapinghandler : ScrapingHandlerDto[]) {
        return  await this.scrapingHandlerService.create(scrapinghandler);
      }
}
