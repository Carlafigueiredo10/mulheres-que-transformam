'use client';

import { aspads, aspadInfo, ASPAD } from '@/data/aspads';
import { useState } from 'react';

export default function AspadSection() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredAspads = aspads.filter(aspad => 
    aspad.orgao.toLowerCase().includes(searchTerm.toLowerCase()) ||
    aspad.sigla.toLowerCase().includes(searchTerm.toLowerCase()) ||
    aspad.chefe.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEmailClick = (email: string) => {
    window.location.href = `mailto:${email}`;
  };

  const handlePhoneClick = (phone: string) => {
    // Remove formatting and create tel: link
    const cleanPhone = phone.replace(/[^\d]/g, '');
    window.location.href = `tel:+55${cleanPhone}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-purple-200">
            <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
            Rede Estratégica
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {aspadInfo.titulo}
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4 leading-relaxed">
            {aspadInfo.descricao}
          </p>
          
          <p className="text-lg font-medium text-purple-700 max-w-2xl mx-auto">
            {aspadInfo.missao}
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">{aspads.length}+</div>
            <div className="text-gray-700 font-semibold">ASPADs Federais</div>
            <div className="text-gray-500 text-sm">Ministérios e órgãos</div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
            <div className="text-gray-700 font-semibold">Cobertura</div>
            <div className="text-gray-500 text-sm">Governo Federal</div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
            <div className="text-gray-700 font-semibold">Disponibilidade</div>
            <div className="text-gray-500 text-sm">Contato direto</div>
          </div>
        </div>

        {/* Search */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                Buscar ASPAD
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="search"
                  placeholder="Digite o nome do órgão, sigla ou responsável..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <svg className="absolute right-3 top-3 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* ASPADs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredAspads.map((aspad) => (
            <div key={aspad.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🏛️</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-lg">{aspad.sigla}</h3>
                  <p className="text-purple-600 text-sm font-medium">ASPAD</p>
                </div>
              </div>

              {/* Órgão */}
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-1">{aspad.orgao}</h4>
              </div>

              {/* Responsável */}
              <div className="mb-4">
                <p className="text-sm text-gray-500 mb-1">Chefe da ASPAD</p>
                <p className="font-medium text-gray-800">{aspad.chefe}</p>
              </div>

              {/* Contatos */}
              <div className="space-y-3">
                {/* Email principal */}
                <button
                  onClick={() => handleEmailClick(aspad.email)}
                  className="w-full flex items-center gap-3 p-3 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors duration-200 group"
                >
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-medium text-blue-700">Email Principal</p>
                    <p className="text-sm text-blue-600 truncate">{aspad.email}</p>
                  </div>
                </button>

                {/* Email secundário */}
                {aspad.emailSecundario && (
                  <button
                    onClick={() => handleEmailClick(aspad.emailSecundario!)}
                    className="w-full flex items-center gap-3 p-3 bg-cyan-50 hover:bg-cyan-100 rounded-xl transition-colors duration-200 group"
                  >
                    <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-medium text-cyan-700">Email Institucional</p>
                      <p className="text-sm text-cyan-600 truncate">{aspad.emailSecundario}</p>
                    </div>
                  </button>
                )}

                {/* Telefone */}
                <button
                  onClick={() => handlePhoneClick(aspad.telefone)}
                  className="w-full flex items-center gap-3 p-3 bg-green-50 hover:bg-green-100 rounded-xl transition-colors duration-200 group"
                >
                  <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-medium text-green-700">Telefone</p>
                    <p className="text-sm text-green-600">{aspad.telefone}</p>
                  </div>
                </button>
              </div>

              {/* Endereço */}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-gray-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <p className="text-sm text-gray-600">{aspad.endereco}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Footer */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Contato Geral da Rede</h3>
          <p className="text-purple-100 mb-6">{aspadInfo.contato.descricao}</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => handleEmailClick(aspadInfo.contato.email)}
              className="inline-flex items-center px-6 py-3 bg-white text-purple-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              {aspadInfo.contato.email}
            </button>
            
            <button
              onClick={() => handlePhoneClick(aspadInfo.contato.telefone)}
              className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-purple-600 transition-colors duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              {aspadInfo.contato.telefone}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}