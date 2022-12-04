import {
  Resolver,
  Query,
  Mutation,
  Args,
  Parent,
  ResolveField,
} from '@nestjs/graphql';
import { Prisma, User } from '@prisma/client';
import { JobsService } from 'src/jobs/jobs.service';
import { ProfilesService } from 'src/profiles/profiles.service';
import { UserService } from './users.service';

@Resolver('User')
export class UsersResolver {
  constructor(
    private readonly userService: UserService,
    protected readonly profileService: ProfilesService,
    protected readonly jobService: JobsService,
  ) {}

  @Mutation('createUser')
  create(@Args('createUserInput') createUserInput: Prisma.UserCreateInput) {
    return this.userService.createUser(createUserInput);
  }

  @Query('users')
  findAll() {
    return this.userService.users({});
  }

  @Query('user')
  findOne(@Args('id') id: string) {
    return this.userService.user({ id: id });
  }

  @Mutation('updateUser')
  update(@Args('updateUserInput') updateUserInput: Prisma.UserUpdateInput) {
    const params = {
      where: { id: String(updateUserInput.id) },
      data: updateUserInput,
    };
    return this.userService.updateUser(params);
  }

  @Mutation('removeUser')
  remove(@Args('id') id: string) {
    return this.userService.deleteUser({ id: id });
  }

  @ResolveField('profile')
  async getProfile(@Parent() user: User) {
    return this.profileService.profile({ userId: user.id });
  }

  @ResolveField('created_jobs')
  async getCreatedJobs(@Parent() user: User) {
    return this.jobService.jobs({
      where: { created_by_id: user.id },
    });
  }

  @ResolveField('assigned_jobs')
  async getAssignedJobs(@Parent() user: User) {
    return this.jobService.jobs({
      where: { assigned_to_id: user.id },
    });
  }
}
