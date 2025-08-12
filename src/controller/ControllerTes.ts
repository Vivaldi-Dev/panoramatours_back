import { Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../../.env') });


export const TestController = async (req: Request, res: Response): Promise<void> => {
    console.log(`EMAIL_USER RAW: "${process.env.EMAIL_USER}"`);
    console.log(`EMAIL_PASSWORD RAW: "${process.env.EMAIL_PASSWORD}"`);

    console.log(`EMAIL_USER: ${process.env.EMAIL_USER}`);
    console.log(`EMAIL_PASSWORD: ${process.env.EMAIL_PASSWORD ? "******" : "undefined"}`);

    res.send("Verifique os logs do servidor para os valores das variáveis.");
}