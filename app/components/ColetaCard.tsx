'use client';

import { Trash2, RecycleIcon, MapPin } from 'lucide-react';
import { ColetaInfo } from '../services/geoservice';
import { useSiteConfig } from '../hooks/useSiteConfig';

interface ColetaCardProps {
  data: ColetaInfo;
  address: string;
}

export default function ColetaCard({ data, address }: ColetaCardProps) {
  const config = useSiteConfig();

  return (
    <div className="w-full max-w-2xl mx-auto mt-8 animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        {/* Header */}
        <div
          className="p-6 text-white"
          style={{
            background: `linear-gradient(to right, ${config.tema.corPrincipal}, ${config.tema.corSecundaria})`,
          }}
        >
          <div className="flex items-start gap-3">
            <MapPin size={24} className="mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold mb-1">{config.textos.labels.enderecoLocalizado}</h3>
              <p className="text-white/90 text-sm">{address}</p>
            </div>
          </div>
        </div>

        {/* Bairro */}
        <div className="px-6 pt-6 pb-4 border-b border-gray-100">
          <p className="font-semibold text-lg" style={{ color: config.tema.corTextoEscuro }}>
            {config.textos.labels.bairro}:{' '}
            <span style={{ color: config.tema.corPrincipal }}>{data.bairro}</span>
          </p>
        </div>

        {/* Horários de Coleta */}
        <div className="p-6 space-y-4">
          {/* Lixo Comum */}
          <div
            className="flex gap-4 p-4 bg-gray-50 rounded-xl border transition-colors"
            style={{ borderColor: '#f3f4f6' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = `${config.tema.corPrincipal}30`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#f3f4f6';
            }}
          >
            <div
              className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: config.tema.corTextoEscuro }}
            >
              <Trash2 size={24} className="text-white" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold mb-1" style={{ color: config.tema.corTextoEscuro }}>
                {config.textos.labels.lixoComum}
              </h4>
              <p className="text-sm leading-relaxed" style={{ color: config.tema.corTextoMedio }}>
                {data.lixo_comum}
              </p>
            </div>
          </div>

          {/* Lixo Reciclável */}
          <div
            className="flex gap-4 p-4 rounded-xl border transition-colors"
            style={{
              backgroundColor: `${config.tema.corPrincipal}08`,
              borderColor: `${config.tema.corPrincipal}30`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = `${config.tema.corPrincipal}60`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = `${config.tema.corPrincipal}30`;
            }}
          >
            <div
              className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: config.tema.corPrincipal }}
            >
              <RecycleIcon size={24} className="text-white" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold mb-1" style={{ color: config.tema.corTextoEscuro }}>
                {config.textos.labels.lixoReciclavel}
              </h4>
              <p className="text-sm leading-relaxed" style={{ color: config.tema.corTextoMedio }}>
                {data.lixo_reciclavel}
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
          <p className="text-xs text-center" style={{ color: config.tema.corTextoMedio }}>
            {config.textos.labels.mensagemRodape}
          </p>
        </div>
      </div>
    </div>
  );
}
