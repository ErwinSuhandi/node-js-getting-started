import { Module } from '@nestjs/common';
import { BankController } from './bank.controller';
import { BankService } from './bank.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BankRepository } from './bank.repository';

@Module({
  imports:[ TypeOrmModule.forFeature([BankRepository])],
  controllers: [BankController],
  exports:[BankService],
  providers: [BankService]
})
export class BankModule {}






