import {NextFunction, Request, Response} from "express";
import {validate} from "class-validator";
import {AppDataSource} from "../data-source"
import {Product} from "../entity/Product";
import {Err, ErrStr, HttpCode} from "../helper/Err";

export class ProductController {

    public static get repo(){
        return AppDataSource.getRepository(Product)
    }

    static async all(request: Request, response: Response, next: NextFunction) {
        let products = []
        try {
            products = await ProductController.repo.find()
        }catch (e){
            console.log('error, write to db', e)
            return response.status(400).send(new Err(HttpCode.E400, ErrStr.ErrStore, e))
        }
        return response.status(200).send(new Err(HttpCode.E200, ErrStr.Ok,products))
    }

    static async one(request: Request, response: Response, next: NextFunction) {
        const {productID} = request.params
        if(!productID){
            return response.status(400).send(new Err(HttpCode.E400, ErrStr.ErrMissingParameter))
        }
        let product = null
        try {
             // product = products.find(p => p._id === productID)
            product = await ProductController.repo.findOneOrFail(productID)
        }catch (e){
            console.log('error, write to db', e)
            return response.status(400).send(new Err(HttpCode.E400, ErrStr.ErrStore, e))
        }
        return response.status(200).send(new Err(HttpCode.E200, ErrStr.Ok,product))
    }

    static async create(request: Request, response: Response, next: NextFunction) {
        let {name, price, media, slug, description} = request.body
        let product = new Product()
        product.price = price
        product.name = name
        product.media = media
        product.slug = slug
        product.description = description
        product.isActive = true

        // console.log('product new:', product)
        try {
            const errors = await validate(product)
            if (errors.length > 0){
                console.log(errors)
                let err = new Err(HttpCode.E400, ErrStr.ErrMissingParameter)
                return response.status(400).send(err)
            }

            await ProductController.repo.save(product)
        }catch (e){
            console.log('error, write to db', e)
            return response.status(400).send(new Err(HttpCode.E400, ErrStr.ErrStore, e))
        }

        return response.status(200).send(new Err(HttpCode.E200, ErrStr.Ok))
    }

    static async delete(request: Request, response: Response, next: NextFunction) {

    }

    static async update(request: Request, response: Response, next: NextFunction) {
        const {productID} = request.params
        if(!productID){
            return response.status(400).send(new Err(HttpCode.E400, ErrStr.ErrMissingParameter))
        }
        let product = null
        try {
            // product = products.find(p => p._id === productID)
            product = await ProductController.repo.findOneOrFail(productID)
        }catch (e){
            return response.status(400).send(new Err(HttpCode.E400, ErrStr.ErrStore))
        }

        let {name, price, media, slug, description} = request.body
        product.price = price
        product.name = name
        product.media = media
        product.slug = slug
        product.description = description

        const errors = await validate(product)
        if (errors.length > 0){
            return response.status(HttpCode.E400).send(new Err(HttpCode.E400,ErrStr.ErrMissingParameter,errors))
        }
        try {
            await ProductController.repo.save(product)
        }catch (e){
            return response.status(400).send(new Err(HttpCode.E400, ErrStr.ErrStore, e))
        }

        return response.status(200).send(new Err(HttpCode.E200, ErrStr.Ok))
    }

}