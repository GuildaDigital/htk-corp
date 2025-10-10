import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  const email = 'ogotico.him@gmail.com'
  const password = 'HTK@Corp2025!'

  // Verifica se já existe
  const existing = await prisma.user.findUnique({
    where: { email }
  })

  if (existing) {
    console.log('✅ Admin já existe')
    return
  }

  // Cria o primeiro admin
  const hashedPassword = await bcrypt.hash(password, 10)

  await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      name: 'Admin HTK Corp',
      role: 'super_admin',
      approved: true
    }
  })

  console.log('✅ Primeiro admin criado!')
  console.log('📧 Email:', email)
  console.log('🔑 Senha:', password)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
