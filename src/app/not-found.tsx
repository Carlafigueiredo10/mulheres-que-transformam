import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-6">
      <div className="max-w-md text-center">
        <h1 className="text-3xl font-bold text-gray-900">Pagina nao encontrada</h1>
        <p className="mt-3 text-gray-600">
          Esse caminho nao existe — mas o projeto continua.
        </p>
        <Link
          href="/"
          className="inline-flex mt-6 px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
        >
          Voltar para Home
        </Link>
      </div>
    </div>
  );
}
