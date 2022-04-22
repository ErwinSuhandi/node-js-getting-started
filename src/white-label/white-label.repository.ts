import { EntityRepository, Repository } from 'typeorm';
import { WhiteLabel } from './white-label.entity';

@EntityRepository(WhiteLabel)
export class WhiteLabelRepository extends Repository<WhiteLabel> {}
