export default function BoasPraticasPage() {
  const practices = [
    {
      category: 'Mentoria e Desenvolvimento',
      items: [
        {
          title: 'Programa de Mentoria Cruzada',
          description: 'Modelo implementado pela Rede de Mulheres Negras Líderes, onde profissionais senioras mentoram iniciantes e vice-versa.',
          source: 'Enap/MIR',
          impact: 'Mais de 200 participantes em 2024'
        },
        {
          title: 'Banco de Talentos Diverso',
          description: 'Sistema para identificar e promover mulheres qualificadas para posições de liderança.',
          source: 'LideraGOV',
          impact: '50% de paridade garantida na 5ª edição'
        }
      ]
    },
    {
      category: 'Networking e Articulação',
      items: [
        {
          title: 'Eventos Interinstitucionais',
          description: 'Reuniões que conectam diferentes redes para amplificar alcance e compartilhar recursos.',
          source: 'Rede Equidade',
          impact: '50+ instituições conectadas'
        },
        {
          title: 'Grupos de WhatsApp Temáticos',
          description: 'Comunicação ágil e troca de oportunidades entre profissionais por área de atuação.',
          source: 'Rede Mulheres Públicas',
          impact: 'Comunicação diária entre membros'
        }
      ]
    },
    {
      category: 'Capacitação e Formação',
      items: [
        {
          title: 'Cursos de Orçamento Sensível a Gênero',
          description: 'Formação técnica específica para qualificar políticas orçamentárias com perspectiva de gênero e raça.',
          source: 'Rede Orçamento Mulher',
          impact: 'Guias técnicos produzidos e disseminados'
        },
        {
          title: 'Workshops Internacionais',
          description: 'Intercâmbio com experiências globais de liderança feminina no setor público.',
          source: 'Columbia Women\'s Leadership Network',
          impact: '20 participantes anuais'
        }
      ]
    },
    {
      category: 'Advocacy e Representação',
      items: [
        {
          title: 'Campanhas de Visibilidade',
          description: 'Ações coordenadas para destacar conquistas e combater invisibilidade das servidoras.',
          source: '@servidorasnegras',
          impact: 'Campanha Consciência Negra 2023'
        },
        {
          title: 'Estudos e Dados',
          description: 'Produção de evidências para embasar políticas públicas e mudanças institucionais.',
          source: 'AMDB',
          impact: 'Perfil demográfico da diplomacia'
        }
      ]
    }
  ];

  const resources = [
    {
      title: 'Guia de Orçamento Sensível a Gênero',
      description: 'Manual técnico para implementar práticas orçamentárias inclusivas',
      type: 'PDF',
      source: 'Rede Orçamento Mulher'
    },
    {
      title: 'Toolkit de Combate ao Assédio',
      description: 'Recursos para denúncia e apoio a vítimas de violência no trabalho',
      type: 'Kit Digital',
      source: 'AMDB'
    },
    {
      title: 'Biblioteca de Recursos GPúblicas',
      description: 'Acervo gratuito de cursos, estudos e ferramentas para gestoras',
      type: 'Plataforma Online',
      source: 'Instituto Alziras'
    },
    {
      title: 'HubAcademy',
      description: 'Cursos de empoderamento e desenvolvimento profissional',
      type: 'Cursos',
      source: 'HubMulher'
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Boas Práticas e Iniciativas
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça casos de sucesso, metodologias e recursos compartilhados pelas redes
          </p>
        </div>

        {/* Boas Práticas */}
        <div className="space-y-12">
          {practices.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                  {categoryIndex + 1}
                </span>
                {category.category}
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-sm text-blue-600 font-medium">Fonte: {item.source}</span>
                        <div className="text-sm text-gray-500 mt-1">{item.impact}</div>
                      </div>
                      <div className="text-green-600">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Recursos Disponíveis */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-8 text-center">Recursos Gratuitos Disponíveis</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.map((resource, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold">{resource.title}</h3>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm">{resource.type}</span>
                </div>
                
                <p className="text-white/90 mb-4 leading-relaxed">{resource.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/80">Por: {resource.source}</span>
                  <button className="px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium">
                    Acessar
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-white/90 mb-6">
              Quer compartilhar uma boa prática da sua rede?
            </p>
            <a
              href="/cadastrar-rede"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-100 transition-colors"
            >
              Cadastrar Iniciativa
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </a>
          </div>
        </div>

        {/* Métricas de Impacto */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { number: '14+', label: 'Redes Ativas' },
            { number: '50+', label: 'Instituições Conectadas' },
            { number: '1000+', label: 'Participantes Beneficiadas' },
            { number: '20+', label: 'Boas Práticas Documentadas' }
          ].map((stat, index) => (
            <div key={index} className="text-center bg-white rounded-xl p-6 shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: 'Boas Práticas | Mulheres que Transformam',
  description: 'Conheça casos de sucesso, metodologias e recursos compartilhados pelas redes de mulheres no serviço público.',
};