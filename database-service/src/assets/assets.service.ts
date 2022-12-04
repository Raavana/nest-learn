import { Injectable } from '@nestjs/common';
import { Asset, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { v4 } from 'uuid';

@Injectable()
export class AssetsService {
  constructor(private prisma: PrismaService) {}

  async asset(
    assetWhereUniqueInput: Prisma.AssetWhereUniqueInput,
  ): Promise<Asset | null> {
    return this.prisma.asset.findUnique({
      where: assetWhereUniqueInput,
    });
  }

  async assets(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.AssetWhereUniqueInput;
    where?: Prisma.AssetWhereInput;
    orderBy?: Prisma.AssetOrderByWithRelationInput;
  }): Promise<Asset[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.asset.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createAsset(data: Prisma.AssetCreateInput): Promise<Asset> {
    const id = v4();
    data.id = id;
    return this.prisma.asset.create({
      data,
    });
  }

  async updateAsset(params: {
    where: Prisma.AssetWhereUniqueInput;
    data: Prisma.AssetUpdateInput;
  }): Promise<Asset> {
    const { where, data } = params;
    return this.prisma.asset.update({
      where,
      data,
    });
  }

  async deleteAsset(where: Prisma.AssetWhereUniqueInput): Promise<Asset> {
    return this.prisma.asset.delete({
      where,
    });
  }
}
