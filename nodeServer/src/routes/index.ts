import {Router} from "express"
import order from "./order";
import product from "./product";

const routes = Router()

routes.use('/product',product)
routes.use('/order',order)

export default routes