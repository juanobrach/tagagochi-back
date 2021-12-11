import { Resolver, Query, Mutation } from '@nestjs/graphql'
import { Mission } from 'src/@generated/prisma-nestjs-graphql/mission/mission.model'
import { PrismaService } from 'src/prisma/prisma.service'

@Resolver()
export class MisionResolver {
  constructor(private prismaService: PrismaService) {}

  @Query(() => [Mission])
  async getAllMissions(): Promise<Mission[]> {
    return await this.prismaService.mission.findMany()
  }

  @Mutation(() => Mission)
  async createMissions(): Promise<Mission> {
    return await this.prismaService.mission.create({
      data: {
        name: 'Financiera',
      },
    })
  }
}
