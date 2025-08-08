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
const nodemailer = require('nodemailer');
const testEmail = () => __awaiter(void 0, void 0, void 0, function* () {
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
        yield transporter.verify();
        console.log("SMTP funcionando!");
    }
    catch (error) {
        console.error("Erro SMTP:", error);
    }
});
testEmail();
