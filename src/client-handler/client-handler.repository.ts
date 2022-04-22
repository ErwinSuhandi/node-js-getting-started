import { EntityRepository, Repository } from 'typeorm';
import { ClientHandler } from './client-handler.entity';

@EntityRepository(ClientHandler)
export class ClientHandlerRepository extends Repository<ClientHandler> {}
