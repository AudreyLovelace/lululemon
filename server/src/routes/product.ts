import {Router} from "express"
import {ProductController} from "../controller/ProductController";

const router = Router()

// get all products
router.get('/', ProductController.all)

// get a product
router.get('/:productID', ProductController.one)

// create a product
router.post('/', ProductController.create)

// update an product
router.put('/:productID', ProductController.update)

// delete an product
router.delete('/:productID', ProductController.delete)

export default router