import axios from 'axios';
import { getAmadeusAccessToken } from './amadeusAuth';

interface SearchParams {
  originLocationCode: string;
  destinationLocationCode: string;
  departureDate: string;
  returnDate?: string;
  adults: number;
  children?: number;
  nonStop?: boolean;      
  max?: number;           
  currencyCode?: string;  
}


export async function searchFlights(params: SearchParams) {
  try {
    const token = await getAmadeusAccessToken();
     console.log(" token",token)
    const response = await axios.get('https://test.api.amadeus.com/v2/shopping/flight-offers', {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.amadeus+json'
      },
      params: {
        originLocationCode: params.originLocationCode,
        destinationLocationCode: params.destinationLocationCode,
        departureDate: params.departureDate,
        returnDate: params.returnDate,
        adults: params.adults,
        children: params.children || 0,
        nonStop: params.nonStop,
        max: params.max || 5,
        currencyCode: params.currencyCode || 'MZN'
      }
    });

    return response.data;
  } catch (error) {
    console.error('Erro ao buscar voos:', error);
    throw new Error('Falha na busca de voos');
  }
}



