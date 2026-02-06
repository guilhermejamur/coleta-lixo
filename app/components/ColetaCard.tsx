'use client';

import { Trash2, RecycleIcon, MapPin } from 'lucide-react';
import { ColetaInfo } from '../services/geoservice';

interface ColetaCardProps {
  data: ColetaInfo;
  address: string;
}

export default function ColetaCard({ data, address }: ColetaCardProps) {
  return (
    <div className="w-full max-w-2xl mx-auto mt-8 animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-estre-green to-estre-green-light p-6 text-white">
          <div className="flex items-start gap-3">
            <MapPin size={24} className="mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold mb-1">Endereço localizado</h3>
              <p className="text-white/90 text-sm">{address}</p>
            </div>
          </div>
        </div>

        {/* Bairro */}
        <div className="px-6 pt-6 pb-4 border-b border-gray-100">
          <p className="text-estre-gray-dark font-semibold text-lg">
            Bairro: <span className="text-estre-green">{data.bairro}</span>
          </p>
        </div>

        {/* Horários de Coleta */}
        <div className="p-6 space-y-4">
          {/* Lixo Comum */}
          <div className="flex gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-estre-green/30 transition-colors">
            <div className="flex-shrink-0 w-12 h-12 bg-estre-gray-dark rounded-lg flex items-center justify-center">
              <Trash2 size={24} className="text-white" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-estre-gray-dark mb-1">Lixo Comum</h4>
              <p className="text-estre-gray text-sm leading-relaxed">{data.lixo_comum}</p>
            </div>
          </div>

          {/* Lixo Reciclável */}
          <div className="flex gap-4 p-4 bg-estre-green/5 rounded-xl border border-estre-green/20 hover:border-estre-green/40 transition-colors">
            <div className="flex-shrink-0 w-12 h-12 bg-estre-green rounded-lg flex items-center justify-center">
              <RecycleIcon size={24} className="text-white" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-estre-gray-dark mb-1">Lixo Reciclável</h4>
              <p className="text-estre-gray text-sm leading-relaxed">{data.lixo_reciclavel}</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
          <p className="text-xs text-estre-gray text-center">
            Mantenha seu lixo separado e contribua com o meio ambiente
          </p>
        </div>
      </div>
    </div>
  );
}
