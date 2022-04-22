import { Module } from '@nestjs/common';
import { BankAccountController } from './bank-account.controller';
import { BankAccountService } from './bank-account.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BankAccountRepository } from './bank-account.repository';
import { BankModule } from 'src/bank/bank.module';
import { WhiteLabelModule } from 'src/white-label/white-label.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports:[ TypeOrmModule.forFeature([BankAccountRepository]), BankModule, WhiteLabelModule, AuthModule],
  controllers: [BankAccountController],
  providers: [BankAccountService]
})
export class BankAccountModule {}





