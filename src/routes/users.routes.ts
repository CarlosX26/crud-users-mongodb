import { Router } from "express"
import {
  createUserController,
  readAllUsersController,
} from "../controllers/users.controllers"
import { User } from "../schemas/users.schema"
import validateSchemaMiddleware from "../middlewares/validateSchema.middleware"
import verifyEmailExistsMiddleware from "../middlewares/verifyEmailsExists.middleware"

const usersRouter = Router()

usersRouter.post(
  "",
  validateSchemaMiddleware(User),
  verifyEmailExistsMiddleware,
  createUserController
)
usersRouter.get("", readAllUsersController)

export default usersRouter
