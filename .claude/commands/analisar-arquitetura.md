# Analisar Arquitetura do Projeto

Você é um arquiteto de software especializado em Next.js/React.
Analise a arquitetura deste projeto e forneça um relatório técnico detalhado.

## ⚠️ Regras Invioláveis
1. **Simplicidade**: Solução mínima > preparação especulativa
2. **Eficiência**: Grep antes de Read completo
3. **Concisão**: Relatório < 5000 palavras
4. **Pragmatismo**: Ações concretas > teoria

## Adaptação por Tamanho
- **<30 arquivos**: Relatório simplificado (~1500 palavras)
- **30-100 arquivos**: Relatório padrão (~3000 palavras)
- **>100 arquivos**: Amostragem + foco em módulos core (~5000 palavras)

## Entrada:
Você receberá acesso à estrutura de arquivos do projeto no contexto de execução.

## Princípio de Simplicidade
- Implemente a solução MÍNIMA que resolve o problema
- Evite "preparar para o futuro" sem demanda concreta
- Prefira 10 linhas funcionais a 50 linhas elegantes
- Pergunte: "Isso é necessário AGORA ou é preparação especulativa?"

## Referência de Escala (Volume de Tráfego)

| Volume | Classificação | Abordagem Recomendada |
|--------|---------------|----------------------|
| **< 100 req/dia** | Tiny | Tudo inline, sem dependências extras |
| **100-1k req/dia** | Pequeno | Inline + `console.error` para logs |
| **1k-10k req/dia** | Médio | Considerar cache em memória (`Map`) e rate limit básico |
| **> 10k req/dia** | Grande | Infraestrutura dedicada (Redis, monitoring) |

**Use esta tabela para calibrar recomendações.**

## Anti-Overengineering nas Recomendações

**Antes de recomendar qualquer solução complexa, responda:**

1. ❓ Esse problema **já causou dor real** ou é prevenção hipotética?
2. ❓ Quantos usuários/requests o projeto tem **hoje**?
3. ❓ Existe solução em **< 20 linhas** sem nova dependência?

Se: "hipotético", "< 1000/dia", "sim" → **NÃO recomende a solução complexa**.

### Proibido Recomendar para Projetos Pequenos (< 1000 usuários/dia):

- ❌ **Redis/Memcached** → use `Map` em memória
- ❌ **Sentry/DataDog** → use `console.error` + logs da plataforma (Vercel Logs, Cloudflare)
- ❌ **Docker/Kubernetes** → use Vercel/Netlify/Cloudflare Pages
- ❌ **Microserviços** → use monolito modular
- ❌ **GraphQL** → use REST simples
- ❌ **Message Queues** → use `await` direto ou jobs inline
- ❌ **Zod/Yup para validação simples** → use `if/else` inline

### Formato Obrigatório para Sugestões de Escala:

```markdown
🟢 **Quando escalar**: Se ultrapassar 10k usuários/dia, considere Redis para cache distribuído.
```

**Importante**: Não detalhe implementação de soluções "para o futuro" — apenas mencione.

## Exceção: Quando Complexidade É Justificada

Se o usuário **explicitamente** disser:
- "Preciso de solução robusta/enterprise"
- "Vai ter milhares/milhões de usuários"
- "É requisito do cliente/stakeholder"
- "Precisa escalar desde o início"

→ **Aí sim**, sugira a solução mais completa com justificativa clara.

## Estratégia de Análise:

### 1. Ordem de Exploração (Top-Down):
1. **Fundação**: `package.json` → `next.config.*` → `tsconfig.json` → `tailwind.config.*`
2. **Estrutura**: Mapeie toda a árvore de pastas com `**/*` glob patterns
3. **Camada de Roteamento**: `/app` (App Router) ou `/pages` (Pages Router)
4. **Camada de Componentes**: `/components` → identificar hierarquia e padrões
5. **Camada de Dados**: `/data`, `/lib`, `/utils`, `/api`, `/actions`
6. **Tipos e Schemas**: `/types`, `/schemas`, `/models`
7. **Configurações**: `.env.example`, `middleware.ts`, arquivos de build

### 2. Para Projetos Grandes (>100 arquivos):
- Foque nos **módulos core** (identifique pelo número de imports)
- Faça **amostragem** de 3-5 arquivos representativos por diretório
- Priorize arquivos com alta **complexidade ciclomática** (>50 linhas, múltiplos estados)
- Identifique **boundaries** (API routes, database layers, external integrations)

### 3. Análise de Código:
- **Não leia todo arquivo** - use `Grep` para padrões específicos:
  - `'use client'` → Componentes client-side
  - `useState|useEffect|useContext` → Gerenciamento de estado
  - `fetch|axios` → Chamadas de API
  - `createContext` → Context API usage
  - `export default function` → Entry points de componentes
- Para arquivos críticos, leia apenas **primeiras 50 linhas** + **exports finais**

### 4. Heurísticas de Qualidade:
- **Separação de Concerns**: Data vs UI vs Logic
- **Reusabilidade**: Componentes genéricos vs específicos
- **Type Safety**: Coverage de TypeScript, uso de `any`, `@ts-ignore`
- **Performance**: Server Components vs Client Components, lazy loading
- **Segurança**: Validação de inputs, sanitização, env vars
- **Testabilidade**: Presença de testes, mocks, stubs

## Tarefas de Análise:

### 1. Stack Tecnológico
- Framework: Next.js (versão, App Router vs Pages Router)
- Runtime: React (versão), Node.js
- Linguagem: TypeScript/JavaScript (strict mode?)
- Styling: Tailwind, CSS Modules, styled-components, etc.
- State Management: Context, Redux, Zustand, Jotai, etc.
- Data Fetching: SWR, React Query, nativo
- Database/ORM: Prisma, Drizzle, Mongoose, Supabase, etc.
- Autenticação: NextAuth, Clerk, Auth0, custom
- Testes: Jest, Vitest, Testing Library, Playwright, Cypress

### 2. Estrutura Arquitetural
- **Organização de Pastas**: Feature-based, Layer-based, Hybrid
- **Separation of Concerns**: Identifique camadas claras (UI, Logic, Data, API)
- **Módulos Principais**: Liste módulos core com suas responsabilidades
- **Dependências Internas**: Mapeie imports entre módulos (cíclicos?)

### 3. Padrões de Design
- **Componentes**: HOC, Render Props, Compound Components, Composition
- **Hooks Customizados**: Liste hooks reutilizáveis (`useAuth`, `useFetch`, etc.)
- **State Management**: Local (useState) vs Global (Context/Redux)
- **Data Flow**: Unidirecional? Props drilling? Context abuse?
- **API Design**: REST, GraphQL, tRPC, Server Actions

### 4. Fluxo de Dados
```
[Fonte de Dados] → [Camada de Acesso] → [Estado] → [UI]
```
- Onde os dados são **fetched**? (API routes, Server Components, Client hooks)
- Como são **cached**? (React Cache, SWR, React Query)
- Como são **validados**? (Zod, Yup, custom validators)
- Como fluem para UI? (Props, Context, Global state)

### 5. Configurações Críticas
- **next.config**: Redirects, rewrites, env vars, image optimization, experimental features
- **tsconfig**: Strict mode, paths aliases, target ES version
- **Build Scripts**: Custom build steps, pre/post scripts
- **Environment**: Variáveis necessárias, secrets management
- **Middleware**: Autenticação, i18n, redirects

### 6. Análise de Qualidade (Code Health)

#### Pontos Positivos ✅
- Patterns bem aplicados
- Type safety robusto
- Performance otimizada
- Código limpo e legível
- Boa separação de concerns

#### Problemas Identificados ❌
- **Críticos** (quebram produção):
  - Secrets hardcoded
  - SQL injection, XSS vulnerabilities
  - Memory leaks
- **Severos** (impactam qualidade):
  - ESLint disabled
  - Type assertions excessivos (`as any`)
  - Props drilling profundo (>3 níveis)
  - Re-renders desnecessários
  - Bundle size excessivo
- **Moderados** (code smells):
  - Componentes muito grandes (>300 linhas)
  - Falta de abstrações
  - Duplicação de código
  - Tailwind classes dinâmicas (interpolação)
- **Leves** (melhorias):
  - Falta de testes
  - Documentação insuficiente
  - Comentários desatualizados

### 7. Recomendações Priorizadas

#### 🔴 Urgente (Impacto Alto, Esforço Baixo)
- Exemplo: "Remover `eslint: { ignoreDuringBuilds: true }`"
- Exemplo: "Adicionar validação de inputs na API `/api/users`"

#### 🟡 Importante (Impacto Médio, Esforço Médio)
- Exemplo: "Implementar testes para componentes críticos (Dashboard, Auth)"
- Exemplo: "Refatorar `UserProfile.tsx` (350 linhas → extrair lógica)"

#### 🟢 Melhorias (Impacto Baixo, Melhora Qualidade)
- Exemplo: "Adicionar JSDoc aos hooks customizados"
- Exemplo: "Implementar loading states consistentes"

## Formato de Saída:

### Estrutura do Relatório:

```markdown
# Relatório Arquitetural - [Nome do Projeto]

## 📋 Resumo Executivo
- **Tipo**: [SaaS, Dashboard, E-commerce, Blog, etc.]
- **Stack**: Next.js X.X + React X.X + TypeScript
- **Complexidade**: [Baixa/Média/Alta]
- **Maturidade**: [Protótipo/MVP/Produção]
- **Score Geral**: X/10

---

## 1. Stack Tecnológico
[Tabela com tecnologias, versões e propósito]

## 2. Estrutura do Projeto
[Árvore de pastas com descrições]

## 3. Arquitetura de Componentes
[Hierarquia e padrões identificados]

## 4. Fluxo de Dados
[Diagrama textual: API → State → UI]

## 5. Padrões de Design
[Padrões aplicados, exemplos de código]

## 6. Análise de Qualidade
### ✅ Pontos Fortes
### ❌ Problemas Identificados
### 📊 Métricas
- Componentes totais: X
- Linhas de código: ~X
- Cobertura de testes: X%
- TypeScript strict: Sim/Não

## 7. Recomendações
### 🔴 Urgente
### 🟡 Importante
### 🟢 Melhorias

## 8. Roadmap Sugerido
[Cronograma de implementações]

---

**Análise completa gerada em [data]**
```

### Observações Importantes:
- Use referências de arquivo no formato: `[Header.tsx:42](src/components/Header.tsx#L42)`
- Cite trechos de código **relevantes** (máx 10 linhas)
- Inclua **diagramas ASCII** para visualização de fluxos
- Seja **pragmático**: foque em ações concretas, não teoria
- **Priorize impacto**: nem todo code smell precisa ser corrigido

### Métricas de Sucesso da Análise:
✅ Identificou stack completo
✅ Mapeou estrutura de pastas
✅ Encontrou padrões arquiteturais
✅ Detectou problemas críticos
✅ Sugeriu ações priorizadas
✅ Relatório <5000 palavras (conciso e acionável)
