import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white min-h-screen flex items-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute top-40 right-32 w-48 h-48 bg-white rounded-full"></div>
        <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-white rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Mulheres que{' '}
            <span className="relative">
              <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                Transformam
              </span>
              <div className="absolute bottom-0 left-0 w-full h-2 bg-yellow-400/30 -z-10"></div>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto leading-relaxed animate-fade-in-delay">
            Promovendo a paridade de gênero nos cargos de liderança da administração pública federal 
            através de dados, pactuação e políticas públicas estruturantes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
            <Link
              href="#modulos"
              className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Conheça os Módulos
            </Link>
            <Link
              href="/modulos/legitimidade"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105"
            >
              Explorar Detalhes
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}