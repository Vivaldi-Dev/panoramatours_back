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
      adults = 1,
      children = 0,
      nonStop,
      max = 5,
      currencyCode = "MZN",
    } = req.query;

    let amadeusResults: any[] = [];
    try {
      const amadeusResponse = await searchFlights({
        originLocationCode: origin as string,
        destinationLocationCode: destination as string,
        departureDate: departureDate as string,
        returnDate: returnDate as string,
        adults: Number(adults),
        children: Number(children),
        nonStop: nonStop === "true",
        max: Number(max),
        currencyCode: currencyCode as string,
      });
      amadeusResults = amadeusResponse.data?.data || []; // Atenção ao caminho correto da resposta do Amadeus
    } catch (err) {
      console.warn("Amadeus não retornou resultados ou falhou:", err);
    }

    // Busca local usando intervalo de datas (dia inicial)
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

    const formattedLocal = localResults.map((f) => ({
      type: "local",
      id: f.id,
      origin: f.origin,
      destination: f.destination,
      departureDate: f.departureDate,
      returnDate: f.returnDate,
      airline: f.airline,
      flightNumberOut: f.flightNumberOut,
      flightNumberBack: f.flightNumberBack,
      fareOut: f.fareOut,
      fareBack: f.fareBack,
      currency: "MZN",
    }));

    const formattedAmadeus = amadeusResults.map((f: any) => ({
      type: "amadeus",
      ...f,
    }));

    const allFlights = [...formattedAmadeus, ...formattedLocal];

    res.json(allFlights);
  } catch (error) {
    console.error("Erro na busca de voos:", error);
    res.status(500).json({ error: "Falha na busca de voos" });
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
            lt: new Date(new Date(departureDate as string).getTime() + 24*60*60*1000) 
          }
        }),
        ...(returnDate && {
          returnDate: {
            gte: new Date(returnDate as string),
            lt: new Date(new Date(returnDate as string).getTime() + 24*60*60*1000)
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
