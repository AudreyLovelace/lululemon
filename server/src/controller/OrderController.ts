import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Order} from "../entity/Order";
import {Err, ErrStr, HttpCode} from "../helper/Err";
import {validate} from "class-validator";
import {IdCheckResult, MKController} from "./MK Controller";
import {UserController} from "./UserController";
import {ProductController} from "./ProductController";

export class OrderController extends MKController{

    public static get repo(){
        return getRepository(Order)
    }

    static async all(request: Request, response: Response, next: NextFunction) {
        let orders = []
        try {
            orders = await OrderController.repo.find()
        }catch (e){
            console.log('error, write to db', e)
            return response.status(400).send(new Err(HttpCode.E400, ErrStr.ErrStore, e))
        }
        return response.status(200).send(new Err(HttpCode.E200, ErrStr.Ok,orders))
    }

    static async one(request: Request, response: Response, next: NextFunction) {
        const {orderID} = request.params
        if(!orderID){
            return response.status(400).send(new Err(HttpCode.E400, ErrStr.ErrMissingParameter))
        }
        let order = null
        try {
            order = await OrderController.repo.findOneOrFail(orderID)
        }catch (e){
            console.log('error, write to db', e)
            return response.status(400).send(new Err(HttpCode.E400, ErrStr.ErrStore, e))
        }
        return response.status(200).send(new Err(HttpCode.E200, ErrStr.Ok,order))
    }

    static async validateOrder(user:number, products:number[]){
        if (typeof user !== "number" ||
            user <= 0 ||
            !Array.isArray(products)
        ){
            throw (new Err(HttpCode.E400, 'invalid user id or product ids'))
        }

        let results: IdCheckResult[] = []

        try {
            console.log('v11111111')
            let temp = await OrderController.checkIdExist([user],UserController.repo)
            if(temp.index != -1){
                throw (new Err(HttpCode.E400,'invalid user id, '+ temp.index))
            }
            results.push(temp)
            console.log('v22222222')

            temp = await OrderController.checkIdExist(products, ProductController.repo)
            if(temp.index != -1){
                throw (new Err(HttpCode.E400,'invalid product id, '+ temp.index))
            }
            console.log('v33333')
            results.push(temp)

        }catch (e){
            console.log('error, write to db,', e)
            throw (new Err(HttpCode.E400, 'invalid user id or products ids, ', e))
        }
        return results
    }
    static async create(request: Request, response: Response, next: NextFunction) {
        let {
            price, taxRate, total, user, products
        }= request.body

        let order = new Order()
        order.taxRate = taxRate
        order.price = price
        order.total = total

        try {
            console.log('01')
            const errors = await validate(order)
            if (errors.length>0){
                return response.status(HttpCode.E400).send(new Err(HttpCode.E400, '', errors))
            }
            console.log('02')

            let result = await OrderController.validateOrder(user, products)
            console.log('03')

            order.user = result[0].entities[0]
            order.products = result[1].entities

            await OrderController.repo.save(order)

        }catch (e){
            return response.status(400).send(new Err(HttpCode.E400, ErrStr.ErrStore, e))
        }
        return response.status(200).send(new Err(HttpCode.E200, ErrStr.Ok,order))
    }

    static async delete(request: Request, response: Response, next: NextFunction) {

    }

    static async update(request: Request, response: Response, next: NextFunction) {

    }

}