'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export const metadata = {
  title: 'Cadastrar Rede | Mulheres que Transformam',
  description: 'Registre sua iniciativa de mulheres no serviço público e amplie o alcance da sua rede no ecossistema nacional.',
};

export default function TerezaPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Olá! Sou Tereza, sua parceira da Rede Conecta Mulheres que Transformam. Vamos juntas descobrir como está o seu órgão em relação à equidade de gênero e diversidade?\n\nVocê quer que eu comece explicando como funciona o projeto Mulheres que Transformam, ou já quer fazer o diagnóstico do seu órgão?'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (messageContent: string) => {
    if (isLoading) return;

    const newMessages = [...messages, { role: 'user' as const, content: messageContent }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const response = await fetch('/api/tereza', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: newMessages.map(msg => ({
            role: msg.role,
            content: msg.content
          }))
        }),
      });

      if (!response.ok) throw new Error('Erro ao enviar mensagem');

      const data = await response.json();
      
      setMessages([...newMessages, {
        role: 'assistant',
        content: data.message
      }]);
    } catch (error) {
      console.error('Erro:', error);
      setMessages([...newMessages, {
        role: 'assistant',
        content: 'Desculpe, ocorreu um erro. Por favor, tente novamente.'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    await sendMessage(userMessage);
  };

  const handleCardClick = (message: string) => {
    sendMessage(message);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-20">
      <div className="max-w-4xl mx-auto p-4 h-[calc(100vh-5rem)] flex flex-col">
        
        <div className="bg-white rounded-t-2xl shadow-lg p-6 flex items-center gap-4 border-b border-gray-200">
          <div className="relative w-16 h-16 flex-shrink-0">
            <Image
              src="/images/tereza.png"
              alt="Tereza"
              fill
              className="rounded-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Tereza</h1>
            <p className="text-sm text-gray-600">Rede Conecta Mulheres que Transformam</p>
          </div>
          <div className="ml-auto">
            <div className="flex items-center gap-2 text-sm text-green-600">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              Tereza está online
            </div>
          </div>
        </div>

        <div className="flex-1 bg-white shadow-lg overflow-y-auto p-6 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                  message.role === 'user'
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white'
                    : 'bg-gray-100 text-gray-800 border border-gray-200'
                }`}
              >
                {message.role === 'assistant' && (
                  <div className="flex items-center gap-2 mb-2">
                    <div className="relative w-6 h-6">
                      <Image
                        src="/images/tereza.png"
                        alt="Tereza"
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <span className="text-xs font-semibold text-blue-600">Tereza</span>
                  </div>
                )}
                <p className="whitespace-pre-wrap text-sm leading-relaxed">{message.content}</p>
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="flex justify-start">
              <div className="max-w-[80%] rounded-2xl px-4 py-3 bg-gray-100 border border-gray-200">
                <div className="flex items-center gap-2">
                  <div className="relative w-6 h-6">
                    <Image
                      src="/images/tereza.png"
                      alt="Tereza"
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Cards Interativos */}
        <div className="bg-white shadow-lg p-4 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
            <button
              onClick={() => handleCardClick('Quero fazer o diagnóstico institucional do meu órgão')}
              className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 text-left"
              disabled={isLoading}
            >
              <div className="font-bold text-sm mb-1">🎯 Fazer Diagnóstico Institucional</div>
              <div className="text-xs opacity-90">Avaliar situação atual de equidade</div>
            </button>

            <button
              onClick={() => handleCardClick('Quero conhecer os 6 módulos do projeto Mulheres que Transformam')}
              className="p-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105 text-left"
              disabled={isLoading}
            >
              <div className="font-bold text-sm mb-1">📚 Conhecer os Módulos</div>
              <div className="text-xs opacity-90">Entender estratégias de implementação</div>
            </button>

            <button
              onClick={() => handleCardClick('Quero montar um plano de ação personalizado para implementar equidade de gênero no meu órgão')}
              className="p-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 text-left"
              disabled={isLoading}
            >
              <div className="font-bold text-sm mb-1">📋 Monte seu Plano de Ação</div>
              <div className="text-xs opacity-90">Plano personalizado de implementação</div>
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-b-2xl shadow-lg p-4">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Digite sua mensagem..."
              disabled={isLoading}
              className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}