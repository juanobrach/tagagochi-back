import { Test, TestingModule } from '@nestjs/testing'
import { MissionResolver } from './mission.resolver'

describe('MissionResolver', () => {
  let resolver: MissionResolver

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MissionResolver],
    }).compile()

    resolver = module.get<MissionResolver>(MissionResolver)
  })

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })
})
