import axios, { AxiosError } from 'axios';
import { getAmadeusAccessToken } from './amadeusAuth';
import { PrismaClient,IATACode } from '../generated/prisma';

const prisma = new PrismaClient();

export interface Airport {
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

interface AmadeusResponse {
  data: {
    type: string;
    subType: string;
    name: string;
    iataCode: string;
    address: {
      cityName: string;
      countryName: string;
      countryCode?: string;
    };
  }[];
}


export async function searchAirports(params: AirportSearchParams): Promise<Airport[]> {
  try {
    const token = await getAmadeusAccessToken();

    const requestParams = {
      subType: params.subType || 'AIRPORT,CITY',
      keyword: params.keyword,
      view: params.view || 'LIGHT',
      ...(params.countryCode && { countryCode: params.countryCode })
    };

    const response = await axios.get<AmadeusResponse>(
      'https://test.api.amadeus.com/v1/reference-data/locations',
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/vnd.amadeus+json'
        },
        params: requestParams
      }
    );

    const amadeusResults: Airport[] = response.data.data.map(r => ({
      type: r.type,
      subType: r.subType,
      name: r.name,
      iataCode: r.iataCode,
      address: r.address
    }));

    const localResults: IATACode[] = await prisma.iATACode.findMany({
      where: {
        OR: [
          { name: { contains: params.keyword } },
          { code: { equals: params.keyword.toUpperCase() } }
        ]
      }
    });

    const localMapped: Airport[] = localResults.map<Airport>((iata) => ({
      type: "location",
      subType: "AIRPORT",
      name: iata.name,
      iataCode: iata.code,
      address: {
        cityName: iata.name,
        countryName: iata.country,
        countryCode: "MZ"
      }
    }));

    const combined = [...amadeusResults, ...localMapped];
    const unique = combined.filter(
      (value, index, self) =>
        index === self.findIndex((t) => t.iataCode === value.iataCode)
    );

    return unique;
  } catch (error: unknown) {
    console.error("Erro na busca de aeroportos:", error);

    const fallback: IATACode[] = await prisma.iATACode.findMany({
      where: {
        OR: [
          { name: { contains: params.keyword } },
          { code: { equals: params.keyword.toUpperCase() } }
        ]
      }
    });

    return fallback.map<Airport>((iata) => ({
      type: "location",
      subType: "AIRPORT",
      name: iata.name,
      iataCode: iata.code,
      address: {
        cityName: iata.name,
        countryName: iata.country,
        countryCode: "MZ"
      }
    }));
  }
}

