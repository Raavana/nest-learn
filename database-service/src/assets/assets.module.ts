import { Module } from '@nestjs/common';
import { AssetsService } from './assets.service';
import { AssetsResolver } from './assets.resolver';
import { PrismaService } from 'src/prisma.service';
import { JobsService } from 'src/jobs/jobs.service';

@Module({
  providers: [AssetsResolver, AssetsService, PrismaService, JobsService],
})
export class AssetsModule {}
