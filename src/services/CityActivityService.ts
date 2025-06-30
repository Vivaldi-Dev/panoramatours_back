import axios, { AxiosError } from 'axios';
import { getAmadeusAccessToken } from './amadeusAuth';

interface GeoCode {
  latitude: number;
  longitude: number;
}

interface Activity {
  name: string;
  description?: string;
  geoCode: GeoCode;
  rating?: string;
}

export class CityActivityService {
  private readonly baseUrl = 'https://test.api.amadeus.com/v1';

  public async getCityGeoCode(keyword: string, countryCode?: string): Promise<GeoCode> {
    try {
      const token = await getAmadeusAccessToken();
      
      const response = await axios.get(`${this.baseUrl}/reference-data/locations/cities`, {
        headers: {
          Authorization: `Bearer ${token}`
        },
        params: {
          keyword,
          ...(countryCode && { countryCode }),
          max: 1
        }
      });

      const city = response.data?.data?.[0];
      if (!city?.geoCode) {
        throw new Error('Cidade não encontrada');
      }

      return city.geoCode;
    } catch (error) {
      console.error('Erro ao buscar cidade:', error instanceof AxiosError ? error.response?.data : error);
      throw new Error('Falha ao localizar cidade');
    }
  }

  public async getActivitiesByCity(keyword: string, countryCode?: string, radiusKm: number = 5): Promise<Activity[]> {
    try {
      // 1. Primeiro obtém as coordenadas
      const geoCode = await this.getCityGeoCode(keyword, countryCode);
      
      // 2. Busca as atividades
      const token = await getAmadeusAccessToken();
      const response = await axios.get(`${this.baseUrl}/shopping/activities`, {
        headers: {
          Authorization: `Bearer ${token}`
        },
        params: {
          latitude: geoCode.latitude,
          longitude: geoCode.longitude,
          radius: radiusKm
        }
      });

      return response.data.data?.map((act: any) => ({
        name: act.name,
        description: act.description,
        geoCode: act.geoCode,
        rating: act.rating?.toString() || undefined
      })) || [];
      
    } catch (error) {
      console.error('Erro ao buscar atividades:', error);
      throw new Error('Falha ao buscar atividades');
    }
  }
}