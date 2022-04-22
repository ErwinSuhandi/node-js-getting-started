import { EntityRepository, Repository } from 'typeorm';
import { IpWhitelist } from './ip-whitelist.entity';

@EntityRepository(IpWhitelist)
export class IpWhitelistRepository extends Repository<IpWhitelist> {}
