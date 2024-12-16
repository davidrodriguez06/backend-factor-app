import { Module } from '@nestjs/common';
import { MultimediaService } from './multimedia.service';
import { MultimediaController } from './multimedia.controller';

@Module({
  providers: [MultimediaService],
  controllers: [MultimediaController]
})
export class MultimediaModule {}
