import { Module } from '@nestjs/common';
import { JobsService } from 'src/jobs/jobs.service';
import { PrismaService } from 'src/prisma.service';
import { ProfilesService } from 'src/profiles/profiles.service';
import { UsersResolver } from './users.resolver';
import { UserService } from './users.service';

@Module({
  providers: [
    UsersResolver,
    UserService,
    PrismaService,
    ProfilesService,
    JobsService,
  ],
})
export class UsersModule {}
