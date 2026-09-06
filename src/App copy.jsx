import { useState } from 'react'
import './App.css'
import { env } from './config/env';

function App() {
  
  // return (
  //   <>
  //     <main className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
  //       <div className="text-center">
  //         <h1 className="text-3xl font-bold">Projeto Limpo 🚀</h1>
  //         <p className="text-slate-400 mt-2">Pronto para iniciar o desenvolvimento.</p>
  //       </div>
  //     </main>
  //   </>
  // )

  console.log('[Configuração Atual de Ambiente]:', env);

  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif', lineHeight: '1.6' }}>
      <h2>🧪 Teste de Configuração de Ambiente</h2>
      <p><b>Modo Ativo:</b> <code style={{ background: '#eee', padding: '2px 6px', borderRadius: '4px' }}>{env.envName}</code></p>
      
      <ul>
        <li><b>Auth Server:</b> {env.authServerUrl}</li>
        <li><b>Client ID:</b> {env.clientId}</li>
        <li><b>Redirect URI:</b> {env.redirectUri}</li>
        <li><b>API Base URL:</b> {env.apiBaseUrl}</li>
        <li><b>Usa Header Ngrok:</b> {env.useNgrokHeader ? 'Sim' : 'Não'}</li>
      </ul>
    </div>
  );

}

export default App
