/// <reference types="vite/client" />

declare interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string;
  // Adicione outras variáveis de ambiente aqui, se necessário
}

declare interface ImportMeta {
  readonly env: ImportMetaEnv;
}
