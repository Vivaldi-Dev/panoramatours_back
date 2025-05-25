import axios, { AxiosError } from 'axios';
import { getAmadeusAccessToken } from './amadeusAuth';

interface Airport {
  type: string;
  subType: string;
  name: string;
  iataCode: string;
  address: {
    cityName: string;
    countryName: string;
    countryCode?: string;
  };
}

export interface AirportSearchParams {
  keyword: string;
  countryCode?: string;
  subType?: string;
  view?: string;
}

export async function searchAirports(params: AirportSearchParams): Promise<Airport[]> {
  try {
    const token = await getAmadeusAccessToken();
    console.log("Token usado para buscar aeroportos:", token);

    const requestParams = {
      subType: params.subType || 'AIRPORT,CITY',
      keyword: params.keyword,
      view: params.view || 'LIGHT',
      ...(params.countryCode && { countryCode: params.countryCode })
    };

    const response = await axios.get('https://test.api.amadeus.com/v1/reference-data/locations', {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.amadeus+json'
      },
      params: requestParams
    });

    return response.data.data || [];
  } catch (error: unknown) {
    let errorMessage = 'Erro desconhecido';
    let errorDetails: any = null;

    if (error instanceof AxiosError) {      errorMessage = error.message;
      errorDetails = error.response?.data;
      console.error('Erro detalhado ao buscar aeroportos:', errorDetails || errorMessage);
    } else if (error instanceof Error) {
      errorMessage = error.message;
      console.error('Erro ao buscar aeroportos:', errorMessage);
    }

    throw new Error(`Falha na busca de aeroportos: ${errorMessage}`);
  }
}