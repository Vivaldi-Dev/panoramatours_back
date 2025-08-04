import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

interface BookingData {
  fullName: string;
  email: string;
  phone: string;
  specialRequests?: string;
  flight: {
    airline: string;
    departure: {
      city: string;
      time: string;
      date?: string;
    };
    arrival: {
      city: string;
      time: string;
      date?: string;
    };
    price: string;
    flightNumber?: string;
  };
}

const transporter = nodemailer.createTransport({
  host: "mail.atlantictravel.co.mz",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

export const sendBookingEmail = async (bookingData: BookingData): Promise<any> => {
  const { fullName, email, phone, specialRequests, flight } = bookingData;

  const formatDate = (dateString?: string) => {
    if (!dateString) return '';
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('pt-PT', options);
  };

  const mailOptions = {
    from: `"Atlantic Travel Lda." <helpdesk@atlantictravel.co.mz>`,
    to: "helpdesk@atlantictravel.co.mz",
    subject: `📦 Nova Reserva - ${fullName}`,
    html: `
    <!DOCTYPE html>
    <html lang="pt">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Nova Reserva - Atlantic Travel</title>
      <style>
        body {
          font-family: 'Arial', sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f9f9f9;
        }
        .header {
          background-color: #0871B5;
          padding: 20px;
          text-align: center;
          border-radius: 8px 8px 0 0;
        }
        .header img {
          max-width: 180px;
        }
        .header h1 {
          color: white;
          margin: 10px 0 0;
          font-size: 24px;
        }
        .content {
          background-color: white;
          padding: 25px;
          border-radius: 0 0 8px 8px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .flight-info {
          background-color: #f5f5f5;
          padding: 15px;
          border-radius: 6px;
          margin: 20px 0;
          border-left: 4px solid #0871B5;
        }
        .flight-route {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 15px 0;
          font-weight: bold;
        }
        .flight-airline {
          color: #0871B5;
          font-weight: bold;
        }
        .divider {
          border-top: 1px dashed #ddd;
          margin: 20px 0;
        }
        .detail-row {
          display: flex;
          margin-bottom: 10px;
        }
        .detail-label {
          font-weight: bold;
          width: 120px;
          color: #555;
        }
        .footer {
          text-align: center;
          margin-top: 30px;
          font-size: 12px;
          color: #777;
        }
        .special-requests {
          background-color: #fff8e1;
          padding: 12px;
          border-radius: 6px;
          margin-top: 15px;
          border-left: 4px solid #ffc107;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>Nova Reserva Recebida</h1>
      </div>
      
      <div class="content">
        <h2>Olá Equipa Atlantic Travel,</h2>
        <p>Recebemos uma nova reserva de voo. Seguem os detalhes:</p>
        
        <div class="flight-info">
          <div class="flight-airline">${flight.airline}</div>
          ${flight.flightNumber ? `<div class="flight-number">Voo: ${flight.flightNumber}</div>` : ''}
          
          <div class="flight-route">
            <div>
              <strong>${flight.departure.city}</strong><br>
              ${flight.departure.time}${flight.departure.date ? `<br>${formatDate(flight.departure.date)}` : ''}
            </div>
            <div>→</div>
            <div>
              <strong>${flight.arrival.city}</strong><br>
              ${flight.arrival.time}${flight.arrival.date ? `<br>${formatDate(flight.arrival.date)}` : ''}
            </div>
          </div>
          
          <div class="price">
            <strong>Preço:</strong> ${flight.price}
          </div>
        </div>
        
        <h3>Informações do Passageiro</h3>
        <div class="detail-row">
          <div class="detail-label">Nome:</div>
          <div>${fullName}</div>
        </div>
        <div class="detail-row">
          <div class="detail-label">E-mail:</div>
          <div>${email}</div>
        </div>
        <div class="detail-row">
          <div class="detail-label">Telefone:</div>
          <div>${phone}</div>
        </div>
        
        ${specialRequests ? `
        <div class="special-requests">
          <strong>Pedidos Especiais:</strong>
          <p>${specialRequests}</p>
        </div>
        ` : ''}
        
        <div class="divider"></div>
        
        <p>Por favor, processem esta reserva e entrem em contacto com o cliente para confirmação.</p>
        
        <div class="footer">
          <p>Atlantic Travel Lda.</p>
          <p>Este e-mail foi gerado automaticamente. Por favor não responda.</p>
        </div>
      </div>
    </body>
    </html>
    `
  };

  try {
    console.log('Enviando e-mail de reserva...');
    const info = await transporter.sendMail(mailOptions);
    console.log('E-mail enviado:', info.messageId);
    return info;
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    throw error;
  }
};