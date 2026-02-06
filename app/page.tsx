'use client';

import { useState } from 'react';
import { Leaf } from 'lucide-react';
import Image from 'next/image';
import SearchInput from './components/SearchInput';
import ColetaCard from './components/ColetaCard';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import { geocodeAddress } from './services/geocoding';
import { loadGeoJSON, findColetaInfo, ColetaInfo } from './services/geoservice';
import { useSiteConfig } from './hooks/useSiteConfig';

export default function Home() {
  const config = useSiteConfig();
  const [isLoading, setIsLoading] = useState(false);
  const [coletaData, setColetaData] = useState<ColetaInfo | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [searchedAddress, setSearchedAddress] = useState<string>('');

  const handleSearch = async (address: string) => {
    setIsLoading(true);
    setError(null);
    setColetaData(null);
    setSearchedAddress(address);

    try {
      // Passo 1: Geocodificar o endereço
      const geoResult = await geocodeAddress(address);

      if (!geoResult) {
        setError(config.textos.mensagens.enderecoNaoEncontrado);
        return;
      }

      // Log para debug
      if (geoResult.cached) {
        console.log('⚡ Resultado instantâneo do cache!');
      }

      // Passo 2: Carregar dados GeoJSON
      const geoData = await loadGeoJSON();

      // Passo 3: Encontrar informações de coleta
      const info = findColetaInfo(geoResult.lat, geoResult.lon, geoData);

      if (!info) {
        setError(config.textos.mensagens.enderecoForaCobertura);
        return;
      }

      setColetaData(info);
    } catch (err) {
      console.error('Erro ao processar busca:', err);
      setError(config.textos.mensagens.erroGenerico);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12 animate-fadeIn">
        <div
          className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6 shadow-lg"
          style={{
            background: `linear-gradient(to bottom right, ${config.tema.corPrincipal}, ${config.tema.corSecundaria})`,
          }}
        >
          {config.visual.usarLogo && config.visual.caminhoLogo ? (
            <Image
              src={config.visual.caminhoLogo}
              alt={`Logo ${config.prefeitura.nome}`}
              width={config.visual.tamanhoIcone}
              height={config.visual.tamanhoIcone}
            />
          ) : (
            <Leaf size={config.visual.tamanhoIcone} className="text-white" />
          )}
        </div>
        <h1
          className="text-4xl sm:text-5xl font-bold mb-4"
          style={{ color: config.tema.corTextoEscuro }}
        >
          {config.textos.tituloPrincipal}
        </h1>
        <p
          className="text-lg max-w-2xl mx-auto leading-relaxed"
          style={{ color: config.tema.corTextoMedio }}
        >
          {config.textos.descricao}
        </p>
      </div>

      {/* Search */}
      <div className="max-w-4xl mx-auto mb-8">
        <SearchInput onSearch={handleSearch} isLoading={isLoading} />
      </div>

      {/* Results */}
      <div className="max-w-4xl mx-auto">
        {isLoading && <LoadingSpinner />}
        {error && <ErrorMessage message={error} />}
        {coletaData && <ColetaCard data={coletaData} address={searchedAddress} />}
      </div>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto mt-16 pt-8 border-t border-gray-200">
        <div className="text-center space-y-2">
          <p className="text-sm" style={{ color: config.tema.corTextoMedio }}>
            {config.textos.footer.titulo}
          </p>
          <p className="text-xs" style={{ color: config.tema.corTextoClaro }}>
            {config.textos.footer.subtitulo}
          </p>
          {config.prefeitura.site && (
            <p className="text-xs">
              <a
                href={config.prefeitura.site}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: config.tema.corPrincipal }}
                className="hover:underline"
              >
                {config.prefeitura.nome} - {config.prefeitura.cidade}/{config.prefeitura.estado}
              </a>
            </p>
          )}
        </div>
      </footer>
    </main>
  );
}
