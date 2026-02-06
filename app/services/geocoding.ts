// Serviço de Geocodificação usando Nominatim (OpenStreetMap)

export interface GeocodingResult {
  lat: number;
  lon: number;
  display_name: string;
}

export async function geocodeAddress(address: string): Promise<GeocodingResult | null> {
  try {
    const encodedAddress = encodeURIComponent(address);
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?q=${encodedAddress}&format=json&limit=1&countrycodes=br`,
      {
        headers: {
          'User-Agent': 'ColetaLixoApp/1.0',
        },
      }
    );

    if (!response.ok) {
      throw new Error('Erro ao buscar endereço');
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
    console.error('Erro na geocodificação:', error);
    return null;
  }
}
