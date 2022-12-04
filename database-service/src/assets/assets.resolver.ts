import {
  Resolver,
  Query,
  Mutation,
  Args,
  Parent,
  ResolveField,
} from '@nestjs/graphql';
import { Asset, Prisma } from '@prisma/client';
import { JobsService } from 'src/jobs/jobs.service';
import { AssetsService } from './assets.service';

@Resolver('Asset')
export class AssetsResolver {
  constructor(
    private readonly assetsService: AssetsService,
    protected readonly jobService: JobsService,
  ) {}

  @Mutation('createAsset')
  create(@Args('createAssetInput') createAssetInput: Prisma.AssetCreateInput) {
    return this.assetsService.createAsset(createAssetInput);
  }

  @Query('assets')
  findAll() {
    return this.assetsService.assets({});
  }

  @Query('asset')
  findOne(@Args('id') id: string) {
    return this.assetsService.asset({ id: id });
  }

  @Mutation('updateAsset')
  update(@Args('updateAssetInput') updateJobInput: Prisma.AssetUpdateInput) {
    const params = {
      where: { id: String(updateJobInput.id) },
      data: updateJobInput,
    };
    return this.assetsService.updateAsset(params);
  }

  @Mutation('removeAsset')
  remove(@Args('id') id: string) {
    return this.assetsService.deleteAsset({ id: id });
  }

  @ResolveField('job')
  async getRelatedJob(@Parent() asset: Asset) {
    if (asset.job_id) {
      return this.jobService.job({ id: asset.job_id });
    }
    return null;
  }
}
