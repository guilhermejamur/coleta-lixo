'use client';

import { AlertCircle } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="w-full max-w-2xl mx-auto mt-8 animate-fadeIn">
      <div className="bg-red-50 border border-red-200 rounded-xl p-6 flex gap-4">
        <AlertCircle size={24} className="text-red-500 flex-shrink-0 mt-0.5" />
        <div>
          <h4 className="font-semibold text-red-800 mb-1">Atenção</h4>
          <p className="text-red-700 text-sm leading-relaxed">{message}</p>
        </div>
      </div>
    </div>
  );
}
