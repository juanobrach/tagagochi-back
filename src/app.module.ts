import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { GraphQLModule } from '@nestjs/graphql'
import { join } from 'path'
import { PrismaService } from './prisma/prisma.service'
import { UserResolver } from './user/user.resolver'
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core'
import { UserService } from './user/user.service'
import { MisionResolver } from './mission/mission.resolver'
import { MissionService } from './mission/mission.service'

@Module({
  imports: [
    GraphQLModule.forRoot({
      debug: false,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService, UserResolver, UserService, MisionResolver, MissionService],
})
export class AppModule {}
