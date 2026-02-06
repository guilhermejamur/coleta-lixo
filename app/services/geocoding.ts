// Serviço de Geocodificação usando Nominatim (OpenStreetMap)

export interface GeocodingResult {
  lat: number;
  lon: number;
  display_name: string;
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

      return {
        lat: parseFloat(data[0].lat),
        lon: parseFloat(data[0].lon),
        display_name: data[0].display_name,
      };
    } catch (error) {
      console.error(`Erro no servidor ${server}:`, error);
      // Continua para próximo servidor
      continue;
    }
  }

  // Se todos os servidores falharam
  return null;
}
