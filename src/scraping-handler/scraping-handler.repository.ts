import { EntityRepository, Repository } from 'typeorm';
import { ScrapingHandler } from './scraping-handler.entity';

@EntityRepository(ScrapingHandler)
export class ScrapingHandlerRepository extends Repository<ScrapingHandler> {}
