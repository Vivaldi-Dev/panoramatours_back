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
exports.sendBookingEmail = void 0;
// utils/emailService.ts
const nodemailer_1 = __importDefault(require("nodemailer"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const transporter = nodemailer_1.default.createTransport({
    host: "mail.atlantictravel.co.mz",
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
});
const sendBookingEmail = (bookingData) => __awaiter(void 0, void 0, void 0, function* () {
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
});
exports.sendBookingEmail = sendBookingEmail;
