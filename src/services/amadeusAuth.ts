import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

export async function getAmadeusAccessToken() {
  try {
    const params = new URLSearchParams({
      grant_type: 'client_credentials',
      client_id: process.env.AMADEUS_CLIENT_ID!,
      client_secret: process.env.AMADEUS_CLIENT_SECRET!,
    });

    const response = await axios.post(
      'https://test.api.amadeus.com/v1/security/oauth2/token',
      params.toString(),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    return response.data.access_token;
  } catch (error: any) {
    console.error('Erro ao obter token da Amadeus:', error.response?.data || error.message);
    throw new Error('Falha na autenticação com a Amadeus');
  }
}
