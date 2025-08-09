import { Request, Response } from 'express';
import { sendEmail } from '../utils/CarEmail';
import dotenv from 'dotenv';

dotenv.config();

interface BookingData {
  car: {
    model: string;
    year: number;
    transmission: string;
    fuel: string;
    seats: number;
    doors: number;
  };
  customer: {
    fullName: string;
    email: string;
    phone: string;
    specialRequests: string;
  };
  rentDetails: {
    pickupDate: string;
    returnDate: string;
    pickupLocation: string;
    returnLocation: string;
    passengers: string;
  };
}

const HELPDESK_EMAIL = process.env.HELPDESK_EMAIL;

export const handleBooking = async (req: Request, res: Response) => {
  try {
    if (!HELPDESK_EMAIL) {
      console.error('HELPDESK_EMAIL não configurado no .env');
      return res.status(500).json({
        success: false,
        message: 'Configuração de e-mail do helpdesk ausente'
      });
    }

    const bookingData: BookingData = req.body;

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

    const emailResult = await sendEmail({
      to: HELPDESK_EMAIL,
      subject: `Nova Solicitação de Reserva - ${bookingData.car.model}`,
      html: emailHtml
    });

    if (!emailResult.success) {
      throw new Error('Falha ao enviar e-mail para o helpdesk');
    }

    res.status(200).json({ success: true, message: 'Reserva enviada ao helpdesk com sucesso' });
  } catch (error) {
    console.error('Error processing booking:', error);
    res.status(500).json({ success: false, message: 'Erro ao processar reserva' });
  }
};
