// utils/emailService.ts
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
    };
    arrival: {
      city: string;
      time: string;
    };
    price: string;
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

  const mailOptions = {
    from: `"Atlantic Travel Lda." <helpdesk@atlantictravel.co.mz>`,
    to: "nobelavivaldi@gmail.com",
    subject: `Nova Reserva - ${fullName}`,
    html: `
      <h2>Nova Reserva</h2>
      <p><strong>Nome:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Telefone:</strong> ${phone}</p>
      <p><strong>Voo:</strong> ${flight.airline} - ${flight.departure.city} para ${flight.arrival.city}</p>
      <p><strong>Horário:</strong> ${flight.departure.time} → ${flight.arrival.time}</p>
      <p><strong>Preço:</strong> ${flight.price}</p>
      <p><strong>Pedidos Especiais:</strong> ${specialRequests || 'Nenhum'}</p>
    `
  };

  return transporter.sendMail(mailOptions);
};