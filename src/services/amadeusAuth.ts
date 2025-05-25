import axios from 'axios';

const AMADEUS_CLIENT_ID = 'yOrSWqfAFVlYLieWRC1xvS6T0VUlhKJK';
const AMADEUS_CLIENT_SECRET = '3B5gT2uUKTOuWdRU';

export async function getAmadeusAccessToken() {
  try {
    const response = await axios.post('https://test.api.amadeus.com/v1/security/oauth2/token', 
      new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: AMADEUS_CLIENT_ID,
        client_secret: AMADEUS_CLIENT_SECRET
      }), 
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    );

    return response.data.access_token;
  } catch (error) {
    console.error('Erro ao obter token da Amadeus:', error);
    throw new Error('Falha na autenticação com a Amadeus');
  }
}
