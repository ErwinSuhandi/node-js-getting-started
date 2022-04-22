import { Module } from '@nestjs/common';
import { IpWhitelistController } from './ip-whitelist.controller';
import { IpWhitelistService } from './ip-whitelist.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IpWhitelistRepository } from './ip-whitelist.repository';

@Module({
  imports:[ TypeOrmModule.forFeature([IpWhitelistRepository])],
  controllers: [IpWhitelistController],
  providers: [IpWhitelistService]
})
export class IpWhitelistModule {}

