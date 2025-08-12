import { Request, Response } from 'express';
import { sendEmail } from '../utils/tourPackageEmail';

interface ReservaRequest {
  pacote: {
    id: number;
    local: string;
    valor: string;
  };
  nome: string;
  email: string;
  telefone: string;
  pessoas: number;
  mensagem?: string;
}

export const reservarPacote = async (req: Request, res: Response): Promise<void> => {
  try {
    const reservaData: ReservaRequest = req.body;

    if (!reservaData.nome || !reservaData.email || !reservaData.telefone || !reservaData.pacote) {
      res.status(400).json({ success: false, message: 'Dados incompletos' });
      return;
    }

    const emailHtml = `
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
          background: linear-gradient(to right, #0871B5, #0A93D6);
          padding: 20px;
          text-align: center;
          border-radius: 8px 8px 0 0;
          color: white;
        }
        .content {
          background: white;
          padding: 25px;
          border-radius: 0 0 8px 8px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        h1 {
          color: #0871B5;
          margin-top: 0;
        }
        .info-box {
          background: #f5f5f5;
          border-left: 4px solid #0871B5;
          padding: 15px;
          margin: 20px 0;
        }
        .label {
          font-weight: bold;
          color: #0871B5;
          display: inline-block;
          min-width: 120px;
        }
        .footer {
          margin-top: 30px;
          text-align: center;
          font-size: 12px;
          color: #777;
        }
        .action-btn {
          display: inline-block;
          margin-top: 20px;
          padding: 10px 20px;
          background: linear-gradient(to right, #EECE2B, #F5D836);
          color: #0871B5 !important;
          text-decoration: none;
          border-radius: 5px;
          font-weight: bold;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>Nova Reserva Recebida</h1>
        <p>Atlantic Travel - Experiências Inesquecíveis</p>
      </div>
      
      <div class="content">
        <p>Olá equipe,</p>
        <p>Você recebeu uma nova solicitação de reserva que precisa ser processada.</p>
        
        <div class="info-box">
          <h2 style="margin-top: 0;">Detalhes do Pacote</h2>
          <p><span class="label">Destino:</span> ${reservaData.pacote.local}</p>
          <p><span class="label">Valor:</span> ${reservaData.pacote.valor}</p>
          <p><span class="label">Nº Pessoas:</span> ${reservaData.pessoas}</p>
        </div>
        
        <h2>Informações do Cliente</h2>
        <p><span class="label">Nome:</span> ${reservaData.nome}</p>
        <p><span class="label">Email:</span> ${reservaData.email}</p>
        <p><span class="label">Telefone:</span> ${reservaData.telefone}</p>
        
        ${reservaData.mensagem ? `
        <div class="info-box">
          <h3 style="margin-top: 0;">Mensagem do Cliente</h3>
          <p>${reservaData.mensagem}</p>
        </div>
        ` : ''}
        
        <a href="mailto:${reservaData.email}?subject=Reserva ${reservaData.pacote.local}" class="action-btn">
          Responder ao Cliente
        </a>
        
        <div class="footer">
          <p>Este é um email automático. Por favor, entre em contato com o cliente em até 24h.</p>
          <p>© ${new Date().getFullYear()} Atlantic Travel. Todos os direitos reservados.</p>
        </div>
      </div>
    </body>
    </html>
    `;

    const emailResult = await sendEmail({
      to: process.env.HELPDESK_EMAIL || 'helpdesk@atlantic-travel.com',
      subject: `[Reserva] Novo pedido para ${reservaData.pacote.local}`,
      html: emailHtml
    });

    if (!emailResult.success) {
      throw new Error('Falha ao enviar email para a equipe');
    }

    res.status(200).json({ 
      success: true, 
      message: 'Sua reserva foi recebida com sucesso! Nossa equipe entrará em contato em breve.' 
    });

  } catch (error) {
    console.error('Erro ao processar reserva:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Ocorreu um erro ao processar sua reserva. Por favor, tente novamente mais tarde.' 
    });
  }
};