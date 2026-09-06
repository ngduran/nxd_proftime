function getEnvVariable(key: string): string {
  const envMap = import.meta.env as unknown as Record<string, string | undefined>;
  const value = envMap[key];

  if (!value) {
    throw new Error(`[Config Error]: A variável de ambiente ${key} não foi definida.`);
  }

  return value;
}

export const env = {
  envName: getEnvVariable('VITE_ENV_NAME'),
  authServerUrl: getEnvVariable('VITE_AUTH_SERVER_URL'),
  clientId: getEnvVariable('VITE_CLIENT_ID'),
  redirectUri: getEnvVariable('VITE_REDIRECT_URI'),
  apiBaseUrl: getEnvVariable('VITE_API_BASE_URL'),
  useNgrokHeader: import.meta.env.VITE_USE_NGROK_HEADER === 'true',

  isDev: import.meta.env.DEV,
  isProd: import.meta.env.PROD,
  isNgrok: import.meta.env.VITE_ENV_NAME === 'ngrok',
} as const;