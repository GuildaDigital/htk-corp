# 📖 Guia do Editor Visual HTK Corp

## 🎯 O Que Foi Implementado

### Sistema de CMS Visual Profissional

Transformamos o site HTK Corp em uma **plataforma completamente editável** através de um painel administrativo profissional, onde você pode editar **textos, tipografia, cores, espaçamentos e todos os estilos** de forma visual.

---

## ✨ Principais Funcionalidades

### 1. **Editor Visual Completo** (`/admin/editor`)
- 📝 Edição de conteúdo de texto
- 🔤 Controle total de tipografia (tamanho, peso, família, altura de linha, espaçamento)
- 🎨 Personalização de cores (texto e fundo)
- 📏 Controle de espaçamento (padding e margin)
- 📐 Opções de layout (display, alinhamento)
- ✨ Efeitos (animações, transições, hover)
- ⚡ CSS customizado para casos avançados
- 🔍 Sistema de busca e filtros por seção

### 2. **Sistema Server-Side Rendering (SSR)**
- ✅ **Zero flash de conteúdo antigo (FOUC)**
- ✅ Conteúdo carregado direto do banco no servidor
- ✅ Performance otimizada
- ✅ SEO-friendly

### 3. **Banco de Dados Estruturado**
- Novo modelo `EditableElement` com campos para todos os estilos
- Campos organizados por categoria (tipografia, cores, layout, efeitos)
- Metadata para organização (section, elementType)

---

## 🚀 Como Usar

### Passo 1: Configurar o Banco de Dados

```bash
cd "C:/Users/Bruno/HTK Corp"

# Gerar cliente Prisma atualizado
npx prisma generate

# Aplicar mudanças ao banco (SQLite local ou Postgres produção)
npx prisma db push

# Popular elementos iniciais
npx tsx prisma/seedElements.ts
```

### Passo 2: Iniciar o Servidor

```bash
npm run dev
```

### Passo 3: Acessar o Editor

1. Faça login: `http://localhost:3000/admin/login`
2. Acesse o editor: `http://localhost:3000/admin/editor`

---

## 📋 Estrutura dos Elementos

Cada elemento editável possui:

### Conteúdo
- **content**: O texto/conteúdo do elemento

### Tipografia
- **fontSize**: Ex: `text-6xl`, `48px`
- **fontWeight**: Ex: `font-bold`, `700`
- **fontFamily**: Ex: `font-sans`
- **lineHeight**: Ex: `leading-tight`, `1.2`
- **letterSpacing**: Ex: `tracking-tight`, `0.05em`

### Cores
- **textColor**: Ex: `text-white`, `#FFFFFF`
- **bgColor**: Ex: `bg-black`, `#000000`

### Espaçamento
- **padding**: Ex: `p-6`, `px-4 py-2`
- **margin**: Ex: `mt-8`, `mx-auto`

### Layout
- **display**: Ex: `block`, `flex`, `inline-block`
- **alignment**: Ex: `text-center`, `items-center`

### Efeitos
- **animation**: Ex: `animate-fade-in`
- **transition**: Ex: `transition-all duration-300`
- **hover**: Ex: `hover:bg-harteck-red-light`

### Avançado
- **customCSS**: JSON ou CSS direto para casos especiais

### Metadata
- **section**: Organização (hero, nav, footer)
- **elementType**: Tipo (heading, paragraph, button)

---

## 🎨 Usando Tailwind CSS

Você pode usar classes Tailwind diretamente nos campos:

### Exemplos de Tipografia
```
text-sm, text-base, text-lg, text-xl, text-2xl ... text-9xl
font-thin, font-light, font-normal, font-medium, font-bold, font-black
leading-tight, leading-snug, leading-normal, leading-relaxed
tracking-tighter, tracking-tight, tracking-normal, tracking-wide
```

### Exemplos de Cores
```
text-white, text-black, text-gray-400, text-harteck-red
bg-black, bg-white, bg-harteck-red, bg-harteck-red/10 (com opacity)
```

### Exemplos de Espaçamento
```
p-4 (padding all sides)
px-6 py-2 (padding horizontal and vertical)
m-4 (margin all sides)
mt-8 mb-4 (margin top and bottom)
```

### Exemplos de Animações
```
animate-fade-in
animate-slide-up
animate-pulse-glow
transition-all duration-300
```

---

## 🔑 Elementos Principais do Site

### Navegação (`nav.*`)
- `nav.logo` - Logo HTK
- `nav.logo.accent` - CORP (vermelho)
- `nav.button` - Botão de consultoria

### Hero (`hero.*`)
- `hero.title` - Título principal
- `hero.subtitle` - Subtítulo
- `hero.description` - Descrição
- `hero.cta` - Botão de ação

### Credibilidade (`credibility.*`)
- `credibility.1/2/3` - Três pontos de credibilidade

### Showcase (`showcase.*`, `pc.*`)
- `showcase.title` - Título da seção
- `pc.gaming.*` - Informações PC Gaming
- `pc.ai.*` - Informações PC AI

### Manifesto (`manifesto.*`)
- `manifesto.title` - Título do manifesto
- `manifesto.text1/2/3/4` - Parágrafos
- `manifesto.principle1/2/3.*` - Três princípios

### CTA Final (`cta.*`)
- `cta.title` - Título do CTA
- `cta.subtitle` - Subtítulo
- `cta.button` - Botão final

### Footer (`footer.*`)
- `footer.brand` - Marca HTK
- `footer.division` - Divisão Harteck
- `footer.tagline` - Tagline
- `footer.motto` - Lema

---

## 🛠️ APIs Disponíveis

### Público (Server-Side)
- `GET /api/elements` - Buscar todos os elementos (usado pelo SSR)

### Admin (Autenticado)
- `GET /api/admin/elements` - Listar todos os elementos
- `POST /api/admin/elements` - Criar/atualizar elemento
- `DELETE /api/admin/elements?key=xxx` - Deletar elemento

---

## 📁 Arquivos Criados/Modificados

### Novos Arquivos
```
prisma/schema.prisma              # Model EditableElement adicionado
prisma/seedElements.ts            # Script de seed inicial

lib/getElements.ts                # Helpers SSR

app/api/elements/route.ts         # API pública
app/api/admin/elements/route.ts   # API admin

app/admin/editor/page.tsx         # Editor visual profissional

EDITOR-GUIDE.md                   # Este guia
```

### Arquivos Modificados
```
app/page.tsx                      # Convertido para SSR com elementos editáveis
```

---

## 🎯 Workflow Recomendado

1. **Desenvolvimento Local**
   - Use SQLite para testar rapidamente
   - Execute seed para popular elementos iniciais
   - Faça edições no `/admin/editor`
   - Visualize mudanças instantaneamente

2. **Deploy para Produção**
   - Push para GitHub
   - Vercel detecta mudanças
   - Executa `prisma db push` automaticamente
   - Execute seed via console Vercel ou API

3. **Edição em Produção**
   - Acesse `/admin/editor` em produção
   - Edite elementos conforme necessário
   - Mudanças aparecem instantaneamente no site

---

## 🔥 Vantagens do Sistema

### 1. Zero FOUC (Flash of Unstyled Content)
- Conteúdo renderizado no servidor
- Usuário vê versão final desde o primeiro carregamento

### 2. Controle Total
- Edite qualquer aspecto visual sem tocar em código
- Tailwind CSS + customização avançada

### 3. Organização
- Elementos agrupados por seção
- Sistema de busca e filtros
- Preview visual dos elementos

### 4. Performance
- SSR = SEO melhorado
- Cache automático do Next.js
- Queries otimizadas do Prisma

### 5. Flexibilidade
- Use Tailwind para rapidez
- Use CSS customizado para casos especiais
- Adicione novos elementos facilmente

---

## 🚨 Comandos Importantes

### Local
```bash
# Desenvolvimento
npm run dev

# Gerar Prisma Client
npx prisma generate

# Aplicar mudanças no banco
npx prisma db push

# Popular elementos
npx tsx prisma/seedElements.ts

# Abrir Prisma Studio
npx prisma studio
```

### Produção (Vercel)
```bash
# Linkar projeto local com Vercel
vercel link

# Baixar env vars
vercel env pull

# Deploy manual
vercel --prod
```

---

## 💡 Dicas Profissionais

### Criar Novos Elementos
1. Vá em `/admin/editor`
2. A interface carregará elementos existentes
3. Use a API ou crie via Prisma Studio

### Duplicar Elemento
1. Copie os dados de um elemento existente
2. Mude apenas o `key`
3. Salve como novo

### Resetar Site
```bash
# Re-execute o seed
npx tsx prisma/seedElements.ts
```

### Backup de Elementos
```bash
# Exportar dados
npx prisma studio
# Ou via código/API
```

---

## 📞 Próximos Passos

- [ ] Adicionar preview em tempo real no editor
- [ ] Implementar histórico de versões
- [ ] Sistema de templates/temas
- [ ] Importar/exportar configurações
- [ ] Editor WYSIWYG drag-and-drop

---

**🎉 Agora você tem um CMS profissional completo!**

O site HTK Corp pode ser editado completamente sem tocar em código, com controle total sobre tipografia, cores, espaçamentos e todos os aspectos visuais, tudo renderizado no servidor para zero flash de conteúdo antigo.