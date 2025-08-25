import { Request, Response } from "express";
import { PrismaClient } from "../generated/prisma";
import { searchFlights } from "../services/searchFlights";

const prisma = new PrismaClient();

export const createFlightPair = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      origin,
      destination,
      departureDate,
      returnDate,
      departureDay,
      returnDay,
      airline,
      flightNumberOut,
      flightNumberBack,
      fareOut,
      fareBack,
    } = req.body;

    const newFlight = await prisma.flightPair.create({
      data: {
        origin,
        destination,
        departureDate: new Date(departureDate),
        returnDate: new Date(returnDate),
        departureDay,
        returnDay,
        airline,
        flightNumberOut,
        flightNumberBack,
        fareOut,
        fareBack,
      },
    });

    res.status(201).json(newFlight);
    return
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao criar simulação de voo" });
    return
  }
};


export const searchAllFlights = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      origin,
      destination,
      departureDate,
      returnDate,
      currencyCode = "MZN",
    } = req.query;

    // Busca voos locais (simulados) no banco
    const localResults = await prisma.flightPair.findMany({
      where: {
        origin: origin as string,
        destination: destination as string,
        ...(departureDate && {
          departureDate: {
            gte: new Date(departureDate as string),
            lt: new Date(new Date(departureDate as string).getTime() + 24 * 60 * 60 * 1000),
          },
        }),
        ...(returnDate && {
          returnDate: {
            gte: new Date(returnDate as string),
            lt: new Date(new Date(returnDate as string).getTime() + 24 * 60 * 60 * 1000),
          },
        }),
      },
    });

    console.log("Voos locais encontrados:", localResults);

    const formattedLocal = localResults.map((f) => {
      const baseFlight = {
        type: "local",
        id: f.id,
        origin: f.origin,
        destination: f.destination,
        departureDate: f.departureDate,
        airline: f.airline,
        flightNumberOut: f.flightNumberOut,
        fareOut: f.fareOut,
        currency: currencyCode,
      };

      // só adiciona volta se houver
      if (f.returnDate && f.flightNumberBack && f.fareBack) {
        return {
          ...baseFlight,
          returnDate: f.returnDate,
          flightNumberBack: f.flightNumberBack,
          fareBack: f.fareBack,
        };
      }

      return baseFlight;
    });

    res.json(formattedLocal);
  } catch (error) {
    console.error("Erro na busca de voos locais:", error);
    res.status(500).json({ error: "Falha na busca de voos locais" });
  }
};

export const searchLocalFlights = async (req: Request, res: Response): Promise<void> => {
  try {
    const { origin, destination, departureDate, returnDate } = req.query;

    console.log("Query Params:", req.query);

    const flights = await prisma.flightPair.findMany({
      where: {
        origin: origin as string,
        destination: destination as string,
        ...(departureDate && {
          departureDate: {
            gte: new Date(departureDate as string),
            lt: new Date(new Date(departureDate as string).getTime() + 24 * 60 * 60 * 1000)
          }
        }),
        ...(returnDate && {
          returnDate: {
            gte: new Date(returnDate as string),
            lt: new Date(new Date(returnDate as string).getTime() + 24 * 60 * 60 * 1000)
          }
        })
      }
    });

    console.log("Flights encontrados:", flights);

    res.json(flights);
    return;
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar voos simulados" });
    return;
  }
};
