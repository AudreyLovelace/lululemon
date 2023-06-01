import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { User } from "../entity/User"

export class UserController {

    public static get repo(){
        return AppDataSource.getRepository(User)
    }

    async all(request: Request, response: Response, next: NextFunction) {
        return UserController.repo.find()
    }

    async one(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)


        const user = await UserController.repo.findOne({
            where: { id }
        })

        if (!user) {
            return "unregistered user"
        }
        return user
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const { firstName, lastName, age } = request.body;

        const user = Object.assign(new User(), {
            firstName,
            lastName,
            age
        })

        return UserController.repo.save(user)
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)

        let userToRemove = await UserController.repo.findOneBy({ id })

        if (!userToRemove) {
            return "this user not exist"
        }

        await UserController.repo.remove(userToRemove)

        return "user has been removed"
    }

}