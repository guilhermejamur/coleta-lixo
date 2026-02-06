// Serviço de análise geográfica usando Turf.js
import * as turf from '@turf/turf';

export interface ColetaInfo {
  bairro: string;
  lixo_comum: string;
  lixo_reciclavel: string;
}

export interface GeoJSONFeature {
  type: string;
  properties: ColetaInfo;
  geometry: {
    type: string;
    coordinates: number[][][];
  };
}

export interface GeoJSONData {
  type: string;
  features: GeoJSONFeature[];
}

let cachedGeoJSON: GeoJSONData | null = null;

export async function loadGeoJSON(): Promise<GeoJSONData> {
  if (cachedGeoJSON) {
    return cachedGeoJSON;
  }

  try {
    const response = await fetch('/coleta.geojson');
    if (!response.ok) {
      throw new Error('Erro ao carregar dados de coleta');
    }
    const data: GeoJSONData = await response.json();
    cachedGeoJSON = data;
    return data;
  } catch (error) {
    console.error('Erro ao carregar GeoJSON:', error);
    throw error;
  }
}

export function findColetaInfo(
  latitude: number,
  longitude: number,
  geoData: GeoJSONData
): ColetaInfo | null {
  const point = turf.point([longitude, latitude]);

  for (const feature of geoData.features) {
    const polygon = turf.polygon(feature.geometry.coordinates);

    if (turf.booleanPointInPolygon(point, polygon)) {
      return feature.properties;
    }
  }

  return null;
}
