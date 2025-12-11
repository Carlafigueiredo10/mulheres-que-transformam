'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log do erro para serviço de monitoramento (ex: Sentry)
    console.error('Erro capturado pelo Error Boundary:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white px-4">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
          {/* Ícone de Erro */}
          <div className="mb-6">
            <div className="mx-auto w-20 h-20 bg-red-100 rounded-full flex items-center justify-center">
              <svg
                className="w-10 h-10 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
          </div>

          {/* Título */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Algo deu errado
          </h1>

          {/* Descrição */}
          <p className="text-gray-600 mb-8 text-lg">
            Desculpe, encontramos um erro inesperado. Nossa equipe foi notificada e está trabalhando para resolver o problema.
          </p>

          {/* Detalhes do erro (apenas em desenvolvimento) */}
          {process.env.NODE_ENV === 'development' && (
            <div className="mb-8 p-4 bg-gray-100 rounded-lg text-left">
              <p className="text-sm font-mono text-gray-700 break-all">
                {error.message}
              </p>
              {error.digest && (
                <p className="text-xs text-gray-500 mt-2">
                  Digest: {error.digest}
                </p>
              )}
            </div>
          )}

          {/* Ações */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={reset}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Tentar Novamente
            </button>

            <Link
              href="/"
              className="px-8 py-3 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-all duration-300"
            >
              Voltar ao Início
            </Link>
          </div>

          {/* Informação Adicional */}
          <p className="mt-8 text-sm text-gray-500">
            Se o problema persistir, entre em contato com{' '}
            <a
              href="mailto:suporte@gov.br"
              className="text-purple-600 hover:underline"
            >
              suporte@gov.br
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
