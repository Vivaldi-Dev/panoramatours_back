import { Router } from "express";
import { searchAirports, AirportSearchParams } from "../services/searchAirports";

const airportRoutes = Router();

airportRoutes.get('/search', async (req, res) => {
    try {
      const params: AirportSearchParams = {
        subType: req.query.subType as string,
        keyword: req.query.keyword as string,
        view: req.query.view as string,
        countryCode: req.query.countryCode as string
      };
  
      const airports = await searchAirports(params);
      res.status(200).json(airports);
    } catch (error: unknown) {
      console.error('Erro na busca de aeroportos:', error);
      
      let errorMessage = 'Erro desconhecido';
      let errorDetails = null;
  
      if (error instanceof Error) {
        errorMessage = error.message;
        if (isAmadeusError(error)) {
          errorDetails = error.response?.data || null;
        }
      }
  
      res.status(500).json({ 
        error: errorMessage,
        details: errorDetails 
      });
    }
  });
  
  function isAmadeusError(error: any): error is { response: { data: any } } {
    return error.response?.data !== undefined;
  }

export default airportRoutes;