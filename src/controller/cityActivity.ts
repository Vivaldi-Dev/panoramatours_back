import { Request, Response } from 'express';
import { CityActivityService } from '../services/CityActivityService';

const cityActivityService = new CityActivityService();

export const getActivitiesByCity = async (req: Request, res: Response): Promise<void> => {
  try {
    const { keyword, countryCode, radius } = req.query;

    if (!keyword || typeof keyword !== 'string') {
      res.status(400).json({ error: 'Parâmetro "keyword" é obrigatório' });
      return;
    }

    const activities = await cityActivityService.getActivitiesByCity(
      keyword,
      typeof countryCode === 'string' ? countryCode : undefined,
      radius ? parseInt(radius as string) : 5
    );

    res.status(200).json(activities); // Retorna exatamente o array de atividades
  } catch (error) {
    console.error('Erro no controller:', error);
    res.status(500).json({ 
      error: error instanceof Error ? error.message : 'Erro ao buscar atividades' 
    });
  }
};