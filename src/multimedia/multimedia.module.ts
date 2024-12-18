import { Module } from '@nestjs/common';
import { MultimediaService } from './multimedia.service';
import { MultimediaController } from './multimedia.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [MultimediaService],
  controllers: [MultimediaController],
  imports:[PrismaModule]
})
export class MultimediaModule {}
