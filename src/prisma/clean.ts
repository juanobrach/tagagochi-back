import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log(`Start clearing ...`)
  await prisma.mission.deleteMany()
  await prisma.user.deleteMany()
  await prisma.userMissionTrack.deleteMany()
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
