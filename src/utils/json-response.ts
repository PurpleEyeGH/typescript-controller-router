import { ValidationError } from 'class-validator';
import { Response } from 'express';

export class JsonResponses {

    static sendTrue(message: string, res: Response) {
        res.json({
            message: message,
            success: true
        })
    }

    static sendFalse(message: string, res: Response) {
        res.json({
            message: message,
            success: false
        })
    }
}