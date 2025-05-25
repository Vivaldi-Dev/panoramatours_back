import express, { Express, Request, Response } from "express";
import cors from "cors";
import { getAmadeusAccessToken } from "./services/amadeusAuth";
import { searchFlights } from "./services/searchFlights";
import { searchAirports } from "./services/searchAirports"; // Importação adicionada
import airportRoutes from "./routes/routes";

const app: Express = express();
const PORT = 4000;

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true 
}));

app.get("/", (req: Request, res: Response) => {
  res.send("odoo");
});



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
      max: 5,
      currencyCode: 'MZN'
    });

    
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar voos' });
  }
});


app.use('/api',airportRoutes)

app.listen(PORT, () => {
  console.log(`App rodando na porta ${PORT}`);
});