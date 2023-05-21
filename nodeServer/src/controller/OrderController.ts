import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";

export class OrderController {

    static all(request: Request, response: Response, next: NextFunction) {
        return response.send('get all orders')
    }

    static async one(request: Request, response: Response, next: NextFunction) {
        const {orderID} = request.params
        return response.send('get an order' + orderID)
    }

    static async create(request: Request, response: Response, next: NextFunction) {
    }

    static async delete(request: Request, response: Response, next: NextFunction) {

    }

    static async update(request: Request, response: Response, next: NextFunction) {

    }

}