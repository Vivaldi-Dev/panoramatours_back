import express, { Express, Request, Response } from "express";
import cors from "cors";
import { getAmadeusAccessToken } from "./services/amadeusAuth";
import { searchFlights } from "./services/searchFlights";
import airportRoutes from "./routes/routes";
import routeractivities from "./routes/cityActivity";
import path from "path";
import carRoutes from "./routes/carRoutes";
import { PrismaClient } from "./generated/prisma";
import Rentrouter from "./routes/rentACarRoutes";
import Routeractivities from "./routes/activityRoutes";
import PackageRouter from "./routes/PackageRoutes";
import RouterLocations from "./routes/location.routes";
import Emailrouter from "./routes/EmailRoutes";
import TesteRoutes from "./routes/TesteTounstes";
import CarEmail from "./routes/CarEmailROutes";


const app: Express = express();
const PORT = 4000;

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(express.json());
app.use(cors({
  origin: 'https://panoramatours.co.mz',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use('/api', carRoutes);

app.use('/api', RouterLocations);

app.use('/api', Emailrouter);

app.use('/api', CarEmail);

app.get("/", (req: Request, res: Response) => {
  res.send("odoo");
});

app.use('/api', routeractivities);

app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use('/api', Routeractivities);


app.use('/api', PackageRouter);

app.get("/amadeus-token", async (req: Request, res: Response) => {
  try {
    const token = await getAmadeusAccessToken();
    res.json({ access_token: token });
  } catch (err) {
    res.status(500).json({ error: "Falha ao obter token da Amadeus" });
  }
});

app.post('/api/search-flights', async (req: Request, res: Response) => {
  try {
    const { origem, destino, dataInicio, dataFim, adultos, criancas } = req.body;
    console.log(req.body)
    const data = await searchFlights({
      originLocationCode: origem,
      destinationLocationCode: destino,
      departureDate: dataInicio,
      returnDate: dataFim,
      adults: parseInt(adultos),
      children: parseInt(criancas || 0),
      nonStop: false,
      max: 100,
      currencyCode: 'MZN'
    });


    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar voos' });
  }
});

export const primaClient = new PrismaClient({
  log: ['query']
})

app.use('/api', airportRoutes)

app.listen(PORT, () => {
  console.log(`App rodando na porta ${PORT}`);
});


app.use('/api', TesteRoutes);
