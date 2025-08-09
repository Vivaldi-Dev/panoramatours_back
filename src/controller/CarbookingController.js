"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleBooking = void 0;
const CarEmail_1 = require("../utils/CarEmail");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const HELPDESK_EMAIL = process.env.HELPDESK_EMAIL;
const handleBooking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!HELPDESK_EMAIL) {
            console.error('HELPDESK_EMAIL não configurado no .env');
            res.status(500).json({
                success: false,
                message: 'Configuração de e-mail do helpdesk ausente'
            });
            return;
        }
        const bookingData = req.body;
        const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
          <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background-color: #0871B5; color: white; padding: 10px; text-align: center; }
              .details { margin: 20px 0; }
              .section { margin-bottom: 15px; }
              .section-title { font-weight: bold; margin-bottom: 5px; }
          </style>
      </head>
      <body>
          <div class="container">
              <div class="header">
                  <h2>Nova Solicitação de Reserva</h2>
              </div>
              
              <div class="details">
                  <div class="section">
                      <div class="section-title">Dados do Cliente:</div>
                      <div>Nome: ${bookingData.customer.fullName}</div>
                      <div>Email: ${bookingData.customer.email}</div>
                      <div>Telefone: ${bookingData.customer.phone}</div>
                      ${bookingData.customer.specialRequests ?
            `<div>Observações: ${bookingData.customer.specialRequests}</div>` : ''}
                  </div>
                  
                  <div class="section">
                      <div class="section-title">Detalhes do Veículo:</div>
                      <div>Modelo: ${bookingData.car.model} (${bookingData.car.year})</div>
                      <div>Transmissão: ${bookingData.car.transmission}</div>
                      <div>Combustível: ${bookingData.car.fuel}</div>
                      <div>Lugares: ${bookingData.car.seats}</div>
                      <div>Portas: ${bookingData.car.doors}</div>
                  </div>
                  
                  <div class="section">
                      <div class="section-title">Detalhes da Reserva:</div>
                      <div>Local de Levantamento: ${bookingData.rentDetails.pickupLocation}</div>
                      <div>Data de Levantamento: ${new Date(bookingData.rentDetails.pickupDate).toLocaleDateString('pt-PT')}</div>
                      <div>Local de Devolução: ${bookingData.rentDetails.returnLocation}</div>
                      <div>Data de Devolução: ${new Date(bookingData.rentDetails.returnDate).toLocaleDateString('pt-PT')}</div>
                      <div>Número de Passageiros: ${bookingData.rentDetails.passengers}</div>
                  </div>
              </div>
          </div>
      </body>
      </html>
    `;
        const emailResult = yield (0, CarEmail_1.sendEmail)({
            to: HELPDESK_EMAIL,
            subject: `Nova Solicitação de Reserva - ${bookingData.car.model}`,
            html: emailHtml
        });
        if (!emailResult.success) {
            throw new Error('Falha ao enviar e-mail para o helpdesk');
        }
        res.status(200).json({ success: true, message: 'Reserva enviada ao helpdesk com sucesso' });
    }
    catch (error) {
        console.error('Error processing booking:', error);
        res.status(500).json({ success: false, message: 'Erro ao processar reserva' });
    }
});
exports.handleBooking = handleBooking;
