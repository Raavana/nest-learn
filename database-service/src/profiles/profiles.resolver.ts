import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProfilesService } from './profiles.service';

@Resolver('Profile')
export class ProfilesResolver {
  constructor(private readonly profilesService: ProfilesService) {}

  @Mutation('createProfile')
  create(
    @Args('createProfileInput') createProfileInput: Prisma.ProfileCreateInput,
  ) {
    return this.profilesService.createProfile(createProfileInput);
  }

  @Query('profiles')
  findAll() {
    return this.profilesService.profiles({});
  }

  @Query('profile')
  findOne(@Args('id') id: string) {
    return this.profilesService.profile({ id: id });
  }

  @Mutation('updateProfile')
  update(
    @Args('updateProfileInput') updateProfileInput: Prisma.ProfileUpdateInput,
  ) {
    const params = {
      where: { id: String(updateProfileInput.id) },
      data: updateProfileInput,
    };
    return this.profilesService.updateProfile(params);
  }

  @Mutation('removeProfile')
  remove(@Args('id') id: string) {
    return this.profilesService.deleteProfile({ id: id });
  }
}
