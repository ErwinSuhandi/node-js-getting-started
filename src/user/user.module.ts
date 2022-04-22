import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { RoleModule } from 'src/role/role.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports:[ TypeOrmModule.forFeature([UserRepository]), RoleModule, AuthModule],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}


