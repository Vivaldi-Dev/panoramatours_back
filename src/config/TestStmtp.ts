const nodemailer = require('nodemailer');

const testEmail = async () => {
  const transporter = nodemailer.createTransport({
    host: "mail.atlantictravel.co.mz",
    port: 587, 
    secure: false, 
    auth: {
      user: "helpdesk@atlantictravel.co.mz",
      pass: "AThelpAT"
    },
    tls: {
      rejectUnauthorized: false 
    }
  });

  try {
    await transporter.verify();
    console.log("SMTP funcionando!");
  } catch (error) {
    console.error("Erro SMTP:", error);
  }
};

testEmail();
