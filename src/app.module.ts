import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientHandler } from './client-handler/client-handler.entity';
import { ClientHandlerModule } from './client-handler/client-handler.module';
import { ScrapingHandler } from './scraping-handler/scraping-handler.entity';
import { ScrapingHandlerModule } from './scraping-handler/scraping-handler.module';
import { Bank } from './bank/bank.entity';
import { BankModule } from './bank/bank.module';
import { BankAccount } from './bank-account/bank-account.entity';
import { BankAccountModule } from './bank-account/bank-account.module';
import { Role } from './role/role.entity';
import { RoleModule } from './role/role.module';
import { User } from './user/user.entity';
import { UserModule } from './user/user.module';
import { WhiteLabel } from './white-label/white-label.entity';
import { WhiteLabelModule } from './white-label/white-label.module';
import { AuthModule } from './auth/auth.module';
import { Menu } from './menu/menu.entity';
import { MenuModule } from './menu/menu.module';
import { IpWhitelist } from './ip-whitelist/ip-whitelist.entity' ;
import { IpWhitelistModule } from './ip-whitelist/ip-whitelist.module';

@Module({
  imports: [ClientHandlerModule, ScrapingHandlerModule, BankModule, BankAccountModule, 
            RoleModule, UserModule, WhiteLabelModule, MenuModule, IpWhitelistModule,
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'password', //isi ini pake password test
    database: 'Scraping_Core',
    entities: [ClientHandler, ScrapingHandler, Bank, BankAccount,Role, User, WhiteLabel, Menu, IpWhitelist],
    synchronize: true,
  }),
    BankModule,
    BankAccountModule,
    RoleModule,
    UserModule,
    WhiteLabelModule,
    AuthModule,
    MenuModule,
    IpWhitelistModule,
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}