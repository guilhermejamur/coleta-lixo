// Serviço de Geocodificação usando Nominatim (OpenStreetMap)
import { cache, getCacheKey } from './cache';

export interface GeocodingResult {
  lat: number;
  lon: number;
  display_name: string;
  cached?: boolean; // Indica se veio do cache
}

// Função auxiliar para fetch com timeout
async function fetchWithTimeout(url: string, options: RequestInit = {}, timeout = 8000): Promise<Response> {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    });
    clearTimeout(id);
    return response;
  } catch (error) {
    clearTimeout(id);
    throw error;
  }
}

export async function geocodeAddress(address: string): Promise<GeocodingResult | null> {
  // 1. Verificar cache primeiro
  const cacheKey = getCacheKey(address);
  const cachedResult = cache.get<GeocodingResult>(cacheKey);

  if (cachedResult) {
    console.log('✅ Endereço encontrado no cache (resposta instantânea)');
    return {
      ...cachedResult,
      cached: true,
    };
  }

  // 2. Se não está no cache, buscar na API
  console.log('🔍 Buscando endereço na API...');
  const encodedAddress = encodeURIComponent(address);

  // Lista de servidores Nominatim (backup)
  const servers = [
    'https://nominatim.openstreetmap.org',
    'https://nominatim.org',
  ];

  // Tenta com cada servidor
  for (const server of servers) {
    try {
      const response = await fetchWithTimeout(
        `${server}/search?q=${encodedAddress}&format=json&limit=1&countrycodes=br`,
        {
          headers: {
            'User-Agent': 'ColetaLixoApp/1.0',
          },
        },
        8000 // Timeout de 8 segundos
      );

      if (!response.ok) {
        continue; // Tenta próximo servidor
      }

      const data = await response.json();

      if (data.length === 0) {
        return null;
      }

      const result: GeocodingResult = {
        lat: parseFloat(data[0].lat),
        lon: parseFloat(data[0].lon),
        display_name: data[0].display_name,
        cached: false,
      };

      // 3. Salvar no cache para futuras buscas
      cache.set(cacheKey, result, 30); // Expira em 30 dias
      console.log('💾 Endereço salvo no cache');

      return result;
    } catch (error) {
      console.error(`Erro no servidor ${server}:`, error);
      // Continua para próximo servidor
      continue;
    }
  }

  // Se todos os servidores falharam
  return null;
}
