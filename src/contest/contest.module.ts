import { Module } from '@nestjs/common';
import { ContestService } from './contest.service';
import { ContestController } from './contest.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ContestController],
  providers: [ContestService],
  imports:[PrismaModule]
})
export class ContestModule {}
