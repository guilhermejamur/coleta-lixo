'use client';

import { useState } from 'react';
import { Leaf } from 'lucide-react';
import SearchInput from './components/SearchInput';
import ColetaCard from './components/ColetaCard';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import { geocodeAddress } from './services/geocoding';
import { loadGeoJSON, findColetaInfo, ColetaInfo } from './services/geoservice';

export default function Home() {
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
        setError('Endereço não encontrado. Verifique o endereço digitado e tente novamente.');
        return;
      }

      // Passo 2: Carregar dados GeoJSON
      const geoData = await loadGeoJSON();

      // Passo 3: Encontrar informações de coleta
      const info = findColetaInfo(geoResult.lat, geoResult.lon, geoData);

      if (!info) {
        setError('Endereço não localizado na área de cobertura atual. Entre em contato com a prefeitura para mais informações.');
        return;
      }

      setColetaData(info);
    } catch (err) {
      console.error('Erro ao processar busca:', err);
      setError('Ocorreu um erro ao buscar as informações. Tente novamente mais tarde.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12 animate-fadeIn">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-estre-green to-estre-green-light rounded-2xl mb-6 shadow-lg">
          <Leaf size={40} className="text-white" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-estre-gray-dark mb-4">
          Consulta de Coleta de Lixo
        </h1>
        <p className="text-lg text-estre-gray max-w-2xl mx-auto leading-relaxed">
          Descubra os dias e horários de coleta de lixo comum e reciclável no seu endereço.
          Contribua com a limpeza da cidade e a preservação do meio ambiente.
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
          <p className="text-sm text-estre-gray">
            Sistema de Consulta de Coleta de Lixo Urbana
          </p>
          <p className="text-xs text-estre-gray-light">
            Desenvolvido com tecnologia e sustentabilidade em mente
          </p>
        </div>
      </footer>
    </main>
  );
}
