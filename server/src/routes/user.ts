import {Router} from "express"
import {UserController} from "../controller/UserController";

const router = Router()

// get all Users
router.get('/', UserController.all)

// get a User
router.get('/:userID', UserController.one)

// create a User
router.post('/', UserController.create)

// update a User
router.put('/:userID', UserController.update)

// delete a User
router.delete('/:userID', UserController.delete)

export default router