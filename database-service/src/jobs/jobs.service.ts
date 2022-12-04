import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Job, Prisma } from '@prisma/client';
import { v4 } from 'uuid';

@Injectable()
export class JobsService {
  constructor(private prisma: PrismaService) {}

  async job(
    jobWhereUniqueInput: Prisma.JobWhereUniqueInput,
  ): Promise<Job | null> {
    return this.prisma.job.findUnique({
      where: jobWhereUniqueInput,
    });
  }

  async jobs(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.JobWhereUniqueInput;
    where?: Prisma.JobWhereInput;
    orderBy?: Prisma.JobOrderByWithRelationInput;
  }): Promise<Job[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.job.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createJob(data: Prisma.JobCreateInput): Promise<Job> {
    const id = v4();
    data.id = id;
    return this.prisma.job.create({
      data,
    });
  }

  async updateJob(params: {
    where: Prisma.JobWhereUniqueInput;
    data: Prisma.JobUpdateInput;
  }): Promise<Job> {
    const { where, data } = params;
    return this.prisma.job.update({
      data,
      where,
    });
  }

  async deleteJob(where: Prisma.JobWhereUniqueInput): Promise<Job> {
    return this.prisma.job.delete({
      where,
    });
  }
}
