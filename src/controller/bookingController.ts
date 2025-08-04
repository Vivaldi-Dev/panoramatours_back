import { Request, Response } from 'express';
import { sendBookingEmail } from '../utils/emailService';
import dotenv from 'dotenv';

interface BookingRequest extends Request {
  body: {
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
  };
}




export const createBooking = async (req: BookingRequest, res: Response): Promise<void> => {
  
  try {
    await sendBookingEmail(req.body);
    res.status(200).json({ 
      success: true, 
      message: "Reserva enviada com sucesso!" 
    });
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    res.status(500).json({ 
      success: false, 
      message: "Falha ao enviar e-mail.",
      error: error instanceof Error ? error.message : 'Erro desconhecido'
    });
  }
};