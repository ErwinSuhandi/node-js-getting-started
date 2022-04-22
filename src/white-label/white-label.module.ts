import { Module } from '@nestjs/common';
import { WhiteLabelController } from './white-label.controller';
import { WhiteLabelService } from './white-label.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WhiteLabelRepository } from './white-label.repository';

@Module({
  imports:[ TypeOrmModule.forFeature([WhiteLabelRepository])],
  controllers: [WhiteLabelController],
  exports:[WhiteLabelService],
  providers: [WhiteLabelService]
})
export class WhiteLabelModule {}
