import { NextRequest, NextResponse } from 'next/server';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

// Função de retry com backoff exponencial
async function fetchWithRetry(
  url: string,
  options: RequestInit,
  maxRetries = 3,
  baseDelay = 1000
): Promise<Response> {
  let lastError: Error | null = null;

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      // Adiciona timeout de 30 segundos
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000);

      const response = await fetch(url, {
        ...options,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      // Retry apenas em erros 5xx ou rate limit (429)
      if (response.ok || (response.status >= 400 && response.status < 500 && response.status !== 429)) {
        return response;
      }

      // Se não OK e é erro retryable, continua
      lastError = new Error(`HTTP ${response.status}: ${response.statusText}`);

    } catch (error) {
      lastError = error instanceof Error ? error : new Error('Erro desconhecido');

      // Não faz retry em timeout ou AbortError na última tentativa
      if (attempt === maxRetries) {
        break;
      }
    }

    // Backoff exponencial: 1s, 2s, 4s
    const delay = baseDelay * Math.pow(2, attempt);
    console.log(`Tentativa ${attempt + 1} falhou. Tentando novamente em ${delay}ms...`);
    await new Promise(resolve => setTimeout(resolve, delay));
  }

  throw lastError || new Error('Falha após múltiplas tentativas');
}

export async function POST(request: NextRequest) {
  try {
    const { messages }: { messages: Message[] } = await request.json();

    // Validação inline (sem dependências externas)
    if (!messages?.length || messages.length > 20) {
      return NextResponse.json(
        { error: 'Número inválido de mensagens (máx: 20)' },
        { status: 400 }
      );
    }

    const mensagemInvalida = messages.find(m =>
      !['user', 'assistant'].includes(m.role) ||
      !m.content?.length ||
      m.content.length > 5000
    );

    if (mensagemInvalida) {
      return NextResponse.json(
        { error: 'Mensagem inválida (máx: 5000 caracteres)' },
        { status: 400 }
      );
    }

    const apiKey = process.env.OPENAI_API_KEY;
    
    if (!apiKey) {
      console.error('OPENAI_API_KEY não encontrada no .env.local');
      throw new Error('Chave da API não configurada');
    }

    // Usa fetchWithRetry com 3 tentativas e backoff exponencial
    const response = await fetchWithRetry(
      'https://api.openai.com/v1/chat/completions',
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        model: 'gpt-4o-mini', // 60x mais barato que GPT-4, perfeito para assistente
        messages: [
          {
            role: 'system',
            content: `Você é Tereza, a IA da Rede Conecta Mulheres que Transformam do Ministério da Gestão e da Inovação em Serviços Públicos (MGI).

🧭 IDENTIDADE E MISSÃO:
"Tecer caminhos entre pessoas, dados e políticas para que a transformação seja coletiva."

🎯 SUAS FUNÇÕES CENTRAIS:
• **Diagnóstico Institucional** - Criar questionários estruturados que combinam dados objetivos e percepções subjetivas das servidoras
• Recomendação de Módulos - Sugerir quais dos 6 módulos implementar primeiro
• Leitura e Análise de Dados - Interpretar indicadores do Observatório de Paridade
• Articulação Institucional - Conectar órgãos com experiências similares
• Facilitação de Conteúdo - Explicar políticas e documentos técnicos
• Educação e Sensibilização - Promover consciência sobre equidade de gênero

📊 METODOLOGIA DE DIAGNÓSTICO:
Quando solicitado diagnóstico institucional, você deve:

1. **COLETA DE DADOS OBJETIVOS (Gestão):**
   - Tamanho do órgão (quantos servidores)
   - Estrutura hierárquica (quantos níveis de liderança)
   - Cargos de confiança disponíveis por nível
   - Dados atuais de ocupação por gênero/raça
   - Orçamento e recursos disponíveis

2. **QUESTIONÁRIO PARA SERVIDORAS (Percepções):**
   - Barreiras percebidas para crescimento
   - Experiências de discriminação ou viés
   - Interesse em assumir liderança
   - Necessidades de infraestrutura (creche, flexibilidade)
   - Cultura organizacional e apoio
   - Redes de mentoria existentes

3. **ANÁLISE CRUZADA:**
   - Correlacionar dados quantitativos com percepções
   - Identificar gaps entre realidade e aspirações
   - Mapear pontos críticos de intervenção
   - Priorizar módulos mais urgentes

📊 OS 6 MÓDULOS DO PROJETO (a "Prateleira de Soluções" — o órgão escolhe por onde começar):
1. Legitimidade da Liderança - Fortalecer quem já está no topo
2. Ampliação da Representação - Bancos de talentos e metas de paridade
3. Estímulo para Liderar - Mentoria, autoconfiança e sponsorship
4. Infraestrutura e Cuidado - Políticas reais de conciliação trabalho-família
5. Corresponsabilidade - Engajar homens como aliados na mudança
6. Diversidade e Interseccionalidade - Foco no "teto de concreto" de mulheres negras e indígenas

🌟 OS 5 EIXOS TRANSVERSAIS ("Regras de Ouro" — atravessam obrigatoriamente todos os módulos):
1. Interseccionalidade - Diversidade (raça, território, deficiência) no centro do desenho
2. Enfrentamento ao Assédio e à Violência - Ambientes seguros (Portaria 6.719/2024)
3. Letramento Digital e Capacitação - Combate a vieses algorítmicos
4. Monitoramento de Dados - Metas, indicadores e transparência pública
5. Institucionalização Normativa - Paridade vira portaria/decreto e sobrevive a trocas de gestão

🎯 META: 50% de paridade de gênero em cargos de liderança até 2027

**IMPORTANTE:** Quando alguém pedir diagnóstico, você deve primeiro coletar dados básicos do órgão e depois criar um questionário estruturado específico para ser enviado às servidoras. Explique que o diagnóstico tem duas fases: coleta de dados objetivos e pesquisa de percepção com as servidoras.

Seja sempre acolhedora, técnica, prática e focada em soluções. Use linguagem acessível mas precisa.`
          },
          ...messages
        ],
        temperature: 0.7,
        max_tokens: 1200,
        presence_penalty: 0.1,
        frequency_penalty: 0.1,
      }),
    },
    3, // maxRetries
    1000 // baseDelay (1s)
    );

    if (!response.ok) {
      const error = await response.text();
      console.error('Erro da API OpenAI:', error);
      throw new Error(`Erro da API: ${response.status}`);
    }

    const data = await response.json();
    
    if (!data.choices || !data.choices[0] || !data.choices[0].message) {
      throw new Error('Resposta inválida da API');
    }

    return NextResponse.json({ 
      message: data.choices[0].message.content 
    });
    
  } catch (error) {
    console.error('Erro na API do chat:', error);
    
    return NextResponse.json(
      { 
        error: 'Desculpe, ocorreu um erro. Por favor, tente novamente.',
        details: error instanceof Error ? error.message : 'Erro desconhecido'
      },
      { status: 500 }
    );
  }
}