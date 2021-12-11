import { Injectable } from '@nestjs/common'
import { User } from 'src/@generated/prisma-nestjs-graphql/user/user.model'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  async getAll(): Promise<User[]> {
    return this.prismaService.user.findMany({
      include: {
        userMissionTrack: {
          include: {
            mission: true,
          },
        },
      },
    })
  }

  async create(): Promise<User> {
    return this.prismaService.user.create({
      data: {
        name: 'juan',
      },
    })
  }
}
