import {Router} from "express"
import {OrderController} from "../controller/OrderController";

const router = Router()

// get all orders
router.get('/', OrderController.all)

// get an order
router.get('/:orderID', OrderController.one)

// create an order
router.post('/', OrderController.create)

// update an order
router.put('/:orderID', OrderController.update)

// delete an order
router.delete('/:orderID', OrderController.delete)

export default router