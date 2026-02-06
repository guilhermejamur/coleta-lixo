'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchInputProps {
  onSearch: (address: string) => void;
  isLoading: boolean;
}

export default function SearchInput({ onSearch, isLoading }: SearchInputProps) {
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
          placeholder="Digite seu endereço completo (Ex: Rua das Flores, 123, Centro, São Paulo)"
          className="w-full px-6 py-4 pr-14 text-base border-2 border-estre-gray-light/30 rounded-lg
                     focus:outline-none focus:border-estre-green focus:ring-2 focus:ring-estre-green/20
                     transition-all duration-200 placeholder:text-estre-gray-light
                     disabled:bg-gray-50 disabled:cursor-not-allowed"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading || !address.trim()}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-estre-green hover:bg-estre-green-dark
                     text-white p-3 rounded-lg transition-all duration-200 disabled:opacity-50
                     disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-estre-green/50
                     active:scale-95"
          aria-label="Buscar"
        >
          <Search size={20} />
        </button>
      </div>
    </form>
  );
}
