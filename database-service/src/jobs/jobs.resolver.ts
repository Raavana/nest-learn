import {
  Resolver,
  Query,
  Mutation,
  Args,
  Parent,
  ResolveField,
} from '@nestjs/graphql';
import { Job, Prisma } from '@prisma/client';
import { AssetsService } from 'src/assets/assets.service';
import { UserService } from 'src/users/users.service';
import { JobsService } from './jobs.service';

@Resolver('Job')
export class JobsResolver {
  constructor(
    private readonly jobsService: JobsService,
    protected readonly userService: UserService,
    protected readonly assetService: AssetsService,
  ) {}

  @Mutation('createJob')
  create(@Args('createJobInput') createJobInput: Prisma.JobCreateInput) {
    return this.jobsService.createJob(createJobInput);
  }

  @Query('jobs')
  findAll() {
    return this.jobsService.jobs({});
  }

  @Query('job')
  findOne(@Args('id') id: string) {
    return this.jobsService.job({ id: id });
  }

  @Mutation('updateJob')
  update(@Args('updateJobInput') updateJobInput: Prisma.JobUpdateInput) {
    const params = {
      where: { id: String(updateJobInput.id) },
      data: updateJobInput,
    };
    return this.jobsService.updateJob(params);
  }

  @Mutation('removeJob')
  remove(@Args('id') id: string) {
    return this.jobsService.deleteJob({ id: id });
  }

  @ResolveField('created_by')
  async getCreatedBy(@Parent() job: Job) {
    return this.userService.user({ id: job.created_by_id });
  }

  @ResolveField('assigned_to')
  async getAssignedTo(@Parent() job: Job) {
    if (job.assigned_to_id) {
      return this.userService.user({ id: job.assigned_to_id });
    }
    return null;
  }

  @ResolveField('assets')
  async getAssets(@Parent() job: Job) {
    return this.assetService.assets({
      where: { job_id: job.id },
    });
  }
}
