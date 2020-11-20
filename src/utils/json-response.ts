import { ValidationError } from 'class-validator';
import { Response } from 'express';

class JsonResponse {

    static sendTrue(message: string, res: Response) {
        res.json({
            message: message,
            success: true
        })
    }

    static sendFalse(status: number, message: string, res: Response) {
        res.status(status).json({
            message: message,
            success: false
        })
    }
}

export default JsonResponse;