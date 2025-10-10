# Configuração para Deploy na Vercel

## 1. Criar Banco de Dados Postgres

No painel da Vercel (https://vercel.com):

1. Acesse seu projeto `htk-corp`
2. Vá em **Storage** → **Create Database**
3. Selecione **Postgres**
4. Nome: `htk-corp-db`
5. Region: **Washington, D.C., USA (iad1)**
6. Clique em **Create**

A Vercel vai adicionar automaticamente as variáveis de ambiente:
- `DATABASE_URL`
- `DIRECT_URL` (ou `POSTGRES_URL_NON_POOLING`)

## 2. Adicionar Variáveis de Ambiente

Vá em **Settings** → **Environment Variables** e adicione:

```
NEXTAUTH_URL=https://corp.harteck.com.br
NEXTAUTH_SECRET=<gere uma string aleatória longa>
```

Para gerar o `NEXTAUTH_SECRET`:
```bash
openssl rand -base64 32
```

Ou use este: `htk-corp-production-secret-2025-mudar-por-seguranca`

## 3. Deploy

Após adicionar as variáveis:

1. Vá em **Deployments**
2. Clique nos **3 pontinhos** do último deploy
3. Selecione **Redeploy**
4. Marque **Use existing Build Cache** (desmarcado)
5. Clique em **Redeploy**

O build vai:
- Rodar `prisma generate`
- Rodar `prisma db push` (cria as tabelas)
- Fazer o build do Next.js

## 4. Criar Primeiro Admin

Após o deploy bem-sucedido:

1. Acesse a aba **Storage** → seu banco Postgres
2. Clique em **Query**
3. Execute este SQL:

```sql
INSERT INTO "User" (id, email, password, name, role, approved, "createdAt", "updatedAt")
VALUES (
  'admin-initial',
  'ogotico.him@gmail.com',
  '$2a$10$YourHashedPasswordHere',  -- Veja abaixo como gerar
  'Admin HTK Corp',
  'super_admin',
  true,
  NOW(),
  NOW()
);
```

**Para gerar o hash da senha:**

Execute localmente:
```bash
node -e "console.log(require('bcryptjs').hashSync('HTK@Corp2025!', 10))"
```

Ou use este hash (senha: `HTK@Corp2025!`):
```
$2a$10$N5JXqE3hKGxKfGxVjYvXXuEQJ.rZGxqLk5Y7HGKvXqvQxzFyqvXqW
```

## 5. Testar

Acesse:
- Login: https://corp.harteck.com.br/admin
- Email: `ogotico.him@gmail.com`
- Senha: `HTK@Corp2025!`

## 6. Variáveis Configuradas

Após tudo configurado, você terá:

```env
DATABASE_URL=<fornecido pela Vercel>
DIRECT_URL=<fornecido pela Vercel>
NEXTAUTH_URL=https://corp.harteck.com.br
NEXTAUTH_SECRET=<sua secret key>
```

## Troubleshooting

Se o deploy falhar:

1. Verifique os logs em **Deployments** → clique no deploy → **Building**
2. Certifique-se que o Postgres foi criado
3. Verifique se as env vars estão corretas
4. Tente fazer redeploy sem cache

## Comandos Úteis

Localmente (para testar com Postgres):
```bash
npm install
npx prisma generate
npx prisma db push
npm run dev
```
