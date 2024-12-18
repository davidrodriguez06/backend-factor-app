import { Module } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { AuthenticationController } from './authentication.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [AuthenticationController],
  providers: [AuthenticationService],
  imports:[PrismaModule]
})
export class AuthenticationModule {}
