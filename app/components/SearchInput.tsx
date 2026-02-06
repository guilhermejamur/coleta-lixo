'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import { useSiteConfig } from '../hooks/useSiteConfig';

interface SearchInputProps {
  onSearch: (address: string) => void;
  isLoading: boolean;
}

export default function SearchInput({ onSearch, isLoading }: SearchInputProps) {
  const config = useSiteConfig();
  const [address, setAddress] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (address.trim()) {
      onSearch(address.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      <div className="relative">
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder={config.textos.placeholderBusca}
          className="w-full px-6 py-4 pr-14 text-base border-2 rounded-lg
                     focus:outline-none focus:ring-2 transition-all duration-200
                     disabled:bg-gray-50 disabled:cursor-not-allowed"
          style={{
            borderColor: `${config.tema.corTextoClaro}50`,
            color: config.tema.corTextoEscuro,
          }}
          onFocus={(e) => {
            e.target.style.borderColor = config.tema.corPrincipal;
            e.target.style.boxShadow = `0 0 0 3px ${config.tema.corPrincipal}20`;
          }}
          onBlur={(e) => {
            e.target.style.borderColor = `${config.tema.corTextoClaro}50`;
            e.target.style.boxShadow = 'none';
          }}
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading || !address.trim()}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-white p-3 rounded-lg
                     transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed
                     focus:outline-none focus:ring-2 active:scale-95"
          style={{
            backgroundColor: config.tema.corPrincipal,
          }}
          onMouseEnter={(e) => {
            if (!isLoading && address.trim()) {
              e.currentTarget.style.backgroundColor = config.tema.corPrincipalEscura;
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = config.tema.corPrincipal;
          }}
          aria-label="Buscar"
        >
          <Search size={20} />
        </button>
      </div>
    </form>
  );
}
