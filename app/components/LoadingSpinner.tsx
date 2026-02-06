'use client';

import { useEffect, useState } from 'react';
import { useSiteConfig } from '../hooks/useSiteConfig';

export default function LoadingSpinner() {
  const config = useSiteConfig();
  const [message, setMessage] = useState('Localizando seu endereço...');

  useEffect(() => {
    const timer1 = setTimeout(() => setMessage('Consultando base de dados...'), 2000);
    const timer2 = setTimeout(() => setMessage('Buscando horários de coleta...'), 4000);
    const timer3 = setTimeout(() => setMessage('Isso pode demorar até 10 segundos...'), 7000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto mt-8 flex flex-col items-center gap-4 animate-fadeIn">
      <div className="relative w-16 h-16">
        <div
          className="absolute inset-0 border-4 rounded-full"
          style={{ borderColor: `${config.tema.corPrincipal}20` }}
        ></div>
        <div
          className="absolute inset-0 border-4 border-t-transparent rounded-full animate-spin"
          style={{ borderColor: config.tema.corPrincipal }}
        ></div>
      </div>
      <p className="text-sm transition-all duration-300" style={{ color: config.tema.corTextoMedio }}>
        {message}
      </p>
      <p className="text-xs" style={{ color: config.tema.corTextoClaro }}>
        Aguarde, estamos processando sua solicitação...
      </p>
    </div>
  );
}
