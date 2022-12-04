import { Module } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { JobsResolver } from './jobs.resolver';
import { PrismaService } from 'src/prisma.service';
import { AssetsService } from 'src/assets/assets.service';
import { UserService } from 'src/users/users.service';

@Module({
  providers: [
    JobsResolver,
    JobsService,
    PrismaService,
    AssetsService,
    UserService,
  ],
})
export class JobsModule {}
