import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function createAdmin() {
  console.log('👤 Creating admin user...')

  const admin = await prisma.user.upsert({
    where: { email: 'ogotico.him@gmail.com' },
    update: {
      password: '$2b$10$H4iozkwU1snZQ5KNbyeQYuLVeIhqxq6I5vxUJvnbOTLiBMuU81u/e', // WoaB2005!
      approved: true,
      role: 'super_admin',
      name: 'Admin HTK Corp'
    },
    create: {
      email: 'ogotico.him@gmail.com',
      password: '$2b$10$H4iozkwU1snZQ5KNbyeQYuLVeIhqxq6I5vxUJvnbOTLiBMuU81u/e', // WoaB2005!
      approved: true,
      role: 'super_admin',
      name: 'Admin HTK Corp'
    }
  })

  console.log('✅ Admin created/updated!')
  console.log('📧 Email:', admin.email)
  console.log('🔑 Password: WoaB2005!')
}

createAdmin()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })