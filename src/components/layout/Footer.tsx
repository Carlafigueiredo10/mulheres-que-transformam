import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-yellow-400 font-bold mb-4">Projeto Mulheres que Transformam</h3>
            <p className="text-slate-300 leading-relaxed">
              Iniciativa do Ministério da Gestão e da Inovação em Serviços Públicos para promover paridade de gênero na liderança pública federal.
            </p>
          </div>

          <div>
            <h3 className="text-yellow-400 font-bold mb-4">Contato</h3>
            <div className="text-slate-300 space-y-2">
              <p>Secretaria de Gestão de Pessoas - SGP/MGI</p>
              <p>Esplanada dos Ministérios, Bloco C</p>
              <p>Brasília - DF, 70046-900</p>
            </div>
          </div>

          <div>
            <h3 className="text-yellow-400 font-bold mb-4">Módulos</h3>
            <div className="space-y-2">
              <Link href="/modulos/legitimidade" className="block text-slate-300 hover:text-yellow-400 transition-colors">
                Legitimidade da Liderança
              </Link>
              <Link href="/modulos/ampliacao" className="block text-slate-300 hover:text-yellow-400 transition-colors">
                Ampliação da Representação
              </Link>
              <Link href="/modulos/estimulo" className="block text-slate-300 hover:text-yellow-400 transition-colors">
                Estímulo ao Interesse para Liderar
              </Link>
              <Link href="/modulos/normativo" className="block text-slate-300 hover:text-yellow-400 transition-colors">
                Apoio Normativo e Regulação
              </Link>
              <Link href="/modulos/infraestrutura" className="block text-slate-300 hover:text-yellow-400 transition-colors">
                Infraestrutura de Sustentação
              </Link>
              <Link href="/modulos/corresponsabilidade" className="block text-slate-300 hover:text-yellow-400 transition-colors">
                Corresponsabilidade Institucional
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}