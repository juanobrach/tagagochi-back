import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const missionData: Prisma.MissionCreateInput[] = [
  { name: 'Money & Finances' },
  { name: 'Career & Work' },
  { name: 'Health & Fitness' },
  { name: 'Fun & Recreation' },
  { name: 'Family & Friends' },
  { name: 'Personal Growth & Learning' },
  { name: 'Community' },
]

async function main() {
  console.log(`Start seeding ...`)
  for (const u of missionData) {
    const mission = await prisma.mission.create({
      data: u,
    })
    console.log(`Created mission with id: ${mission.id}`)
  }
  console.log(`Seeding finished.`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
