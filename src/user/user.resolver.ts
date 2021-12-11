import { Query, Resolver, Mutation } from '@nestjs/graphql'
import { User } from 'src/@generated/prisma-nestjs-graphql/user/user.model'
import { UserService } from './user.service'

@Resolver()
export class UserResolver {
  constructor(private userService: UserService) {}

  @Mutation(() => User)
  async create(): Promise<User> {
    return await this.userService.create()
  }

  @Query(() => [User])
  async getUsers(): Promise<User[]> {
    return await this.userService.getAll()
  }
}
