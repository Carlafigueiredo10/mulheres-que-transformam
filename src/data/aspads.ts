export interface ASPAD {
  id: string;
  orgao: string;
  sigla: string;
  chefe: string;
  email: string;
  emailSecundario?: string;
  telefone: string;
  endereco: string;
}

export const aspads: ASPAD[] = [
  {
    id: 'agu',
    orgao: 'Advocacia-Geral da União',
    sigla: 'AGU',
    chefe: 'Claudia Aparecida de Souza Trindade',
    email: 'claudia.trindade@agu.gov.br',
    emailSecundario: 'aedi.agu@agu.gov.br',
    telefone: '(61) 2026-8515',
    endereco: 'SAUS, Qd. 03, Lt. 5/6, Ed. Multi Brasil Corporate, Brasília/DF'
  },
  {
    id: 'cgu',
    orgao: 'Controladoria-Geral da União',
    sigla: 'CGU',
    chefe: 'Fábio Félix Cunha da Silva',
    email: 'participacao@cgu.gov.br',
    telefone: '(61) 2020-7399',
    endereco: 'SAUS, Quadra 5, Bloco A, Ed. Multibrasil, Brasília/DF'
  },
  {
    id: 'mtur',
    orgao: 'Ministério do Turismo',
    sigla: 'MTur',
    chefe: 'Juliana Paula de Paiva Oliveira',
    email: 'juliana.paiva@turismo.gov.br',
    emailSecundario: 'aspadi@turismo.gov.br',
    telefone: '(61) 2023-7198',
    endereco: 'Esplanada dos Ministérios, Bloco U, Brasília/DF'
  },
  {
    id: 'mec',
    orgao: 'Ministério da Educação',
    sigla: 'MEC',
    chefe: 'Elayne Messias Passos',
    email: 'apsd@mec.gov.br',
    emailSecundario: 'elaynepassos@mec.gov.br',
    telefone: '(61) 2022-2681',
    endereco: 'Esplanada dos Ministérios, Bloco L, Brasília/DF'
  },
  {
    id: 'mgi',
    orgao: 'Ministério da Gestão e Inovação',
    sigla: 'MGI',
    chefe: 'Daniela Salomão Gorayeb',
    email: 'daniela.gorayeb@gestao.gov.br',
    telefone: '(61) 2020-5270',
    endereco: 'Esplanada dos Ministérios, Brasília/DF'
  },
  {
    id: 'mmulheres',
    orgao: 'Ministério das Mulheres',
    sigla: 'MMulheres',
    chefe: 'Atiliana da Silva Vicente Brunetto',
    email: 'apsd@mulheres.gov.br',
    telefone: '(61) 2027-3072',
    endereco: 'Esplanada dos Ministérios, Brasília/DF'
  },
  {
    id: 'mdhc',
    orgao: 'Ministério dos Direitos Humanos e da Cidadania',
    sigla: 'MDHC',
    chefe: 'Anna Karla da Silva Pereira',
    email: 'anna.pereira@mdh.gov.br',
    emailSecundario: 'aspad@mdh.gov.br',
    telefone: '(61) 2030-3447',
    endereco: 'Esplanada dos Ministérios, Brasília/DF'
  },
  {
    id: 'mte',
    orgao: 'Ministério do Trabalho e Emprego',
    sigla: 'MTE',
    chefe: 'Anatalina Lourenço da Silva',
    email: 'anatalina.silva@trabalho.gov.br',
    telefone: '(61) 2031-4370',
    endereco: 'Esplanada dos Ministérios, Brasília/DF'
  },
  {
    id: 'mf',
    orgao: 'Ministério da Fazenda',
    sigla: 'MF',
    chefe: 'Juliana Cristina da Silva Santos',
    email: 'aspad.gmf@fazenda.gov.br',
    telefone: '(61) 3412-2263',
    endereco: 'Esplanada dos Ministérios, Brasília/DF'
  },
  {
    id: 'mir',
    orgao: 'Ministério da Igualdade Racial',
    sigla: 'MIR',
    chefe: 'Fábio Bruni (substituto)',
    email: 'participacao@igualdaderacial.gov.br',
    telefone: '(61) 2027-3608',
    endereco: 'Esplanada dos Ministérios, Brasília/DF'
  },
  {
    id: 'ms',
    orgao: 'Ministério da Saúde',
    sigla: 'MS',
    chefe: 'Cristiane Santos',
    email: 'apsd.ms@saude.gov.br',
    telefone: '(61) 3315-2121',
    endereco: 'Esplanada dos Ministérios, Brasília/DF'
  },
  {
    id: 'mma',
    orgao: 'Ministério do Meio Ambiente e Mudança do Clima',
    sigla: 'MMA',
    chefe: 'Luciana Holanda',
    email: 'apsd.mma@mma.gov.br',
    telefone: '(61) 2028-1451',
    endereco: 'Esplanada dos Ministérios, Bloco B, Brasília/DF'
  },
  {
    id: 'secom',
    orgao: 'Secretaria de Comunicação Social',
    sigla: 'SECOM/PR',
    chefe: 'America Bonfim',
    email: 'participacaoediversidade.secom@presidencia.gov.br',
    telefone: '(61) 3411-8722',
    endereco: 'Palácio do Planalto, Brasília/DF'
  }
];

export const aspadInfo = {
  titulo: 'ASPAD: a ponte entre governo e sociedade',
  descricao: 'As Assessorias de Participação Social e Diversidade integram todos os ministérios e conectam as agendas de gênero, raça e participação à Rede Conecta Mulheres que Transformam.',
  missao: 'Elas fortalecem o diálogo, a escuta e a construção conjunta de políticas públicas.',
  contato: {
    email: 'redeconecta@gestao.gov.br',
    telefone: '(61) 2020-5000',
    descricao: 'Coordenação-Geral da Rede Conecta Mulheres que Transformam'
  }
};