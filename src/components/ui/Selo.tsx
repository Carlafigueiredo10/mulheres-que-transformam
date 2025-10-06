'use client';

import { SeloNivel, SeloInfo, selosInfo } from '@/data/orgaos-aderentes';

interface SeloProps {
  nivel: SeloNivel;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
}

export default function Selo({ nivel, size = 'md', showLabel = true }: SeloProps) {
  const seloData = selosInfo.find(s => s.nivel === nivel);
  
  if (!seloData) return null;

  const sizeClasses = {
    sm: 'text-xs px-2 py-1',
    md: 'text-sm px-3 py-1.5',
    lg: 'text-base px-4 py-2'
  };

  const colorClasses = {
    green: 'bg-green-100 text-green-800 border-green-200',
    purple: 'bg-purple-100 text-purple-800 border-purple-200', 
    yellow: 'bg-yellow-100 text-yellow-800 border-yellow-200'
  };

  return (
    <div className={`
      inline-flex items-center rounded-full border font-medium
      ${sizeClasses[size]} 
      ${colorClasses[seloData.cor as keyof typeof colorClasses]}
    `}>
      <span className="mr-1">{seloData.icone}</span>
      {showLabel && seloData.nome}
    </div>
  );
}

interface SeloDetalhesProps {
  nivel: SeloNivel;
}

export function SeloDetalhes({ nivel }: SeloDetalhesProps) {
  const seloData = selosInfo.find(s => s.nivel === nivel);
  
  if (!seloData) return null;

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
      <div className="flex items-center mb-4">
        <span className="text-3xl mr-3">{seloData.icone}</span>
        <h3 className="text-2xl font-bold text-gray-800">Nível {seloData.nome}</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-semibold text-gray-700 mb-3">Requisitos:</h4>
          <ul className="space-y-2">
            {seloData.requisitos.map((req, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">•</span>
                <span className="text-gray-600 text-sm">{req}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-gray-700 mb-3">Benefícios:</h4>
          <ul className="space-y-2">
            {seloData.beneficios.map((ben, index) => (
              <li key={index} className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span className="text-gray-600 text-sm">{ben}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}