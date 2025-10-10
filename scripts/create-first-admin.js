const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcryptjs')

const prisma = new PrismaClient()

async function main() {
  const email = 'ogotico.him@gmail.com'
  const password = 'HTK@Corp2025!' // Senha temporária - MUDE DEPOIS DO PRIMEIRO LOGIN

  // Verifica se o usuário já existe
  const existingUser = await prisma.user.findUnique({
    where: { email }
  })

  if (existingUser) {
    console.log('✅ Usuário admin já existe:', email)
    return
  }

  // Hash da senha
  const hashedPassword = await bcrypt.hash(password, 10)

  // Cria o primeiro admin (já aprovado)
  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      name: 'Admin HTK Corp',
      role: 'super_admin',
      approved: true
    }
  })

  console.log('✅ Primeiro admin criado com sucesso!')
  console.log('📧 Email:', email)
  console.log('🔑 Senha temporária:', password)
  console.log('\n⚠️  IMPORTANTE: Faça login e troque a senha imediatamente!')
}

main()
  .catch((e) => {
    console.error('❌ Erro:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
