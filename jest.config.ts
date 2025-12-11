import type { Config } from 'jest';
import nextJest from 'next/jest';

const createJestConfig = nextJest({
  // Caminho para o app Next.js para carregar next.config.js e arquivos .env
  dir: './',
});

// Configuração customizada do Jest
const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',

  // Setup files
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],

  // Module name mapper para path aliases
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },

  // Padrões de arquivos de teste
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[jt]s?(x)',
  ],

  // Ignorar pastas
  testPathIgnorePatterns: [
    '/node_modules/',
    '/.next/',
  ],

  // Cobertura
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.stories.{js,jsx,ts,tsx}',
    '!src/**/__tests__/**',
  ],

  // Transformar arquivos
  transform: {
    '^.+\\.(ts|tsx)$': ['@swc/jest', {
      jsc: {
        transform: {
          react: {
            runtime: 'automatic',
          },
        },
      },
    }],
  },
};

// createJestConfig é exportado dessa forma para garantir que next/jest possa carregar a config do Next.js
export default createJestConfig(config);
