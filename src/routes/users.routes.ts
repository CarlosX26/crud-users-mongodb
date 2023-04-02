import { Router } from "express"
import {
  createUserController,
  readAllUsersController,
  updateUserController,
} from "../controllers/users.controllers"
import { User, UserUpdate } from "../schemas/users.schema"
import validateSchemaMiddleware from "../middlewares/validateSchema.middleware"
import verifyEmailExistsMiddleware from "../middlewares/verifyEmailsExists.middleware"
import validateTokenMiddleware from "../middlewares/validateToken.middleware"

const usersRouter = Router()

usersRouter.post(
  "",
  validateSchemaMiddleware(User),
  verifyEmailExistsMiddleware,
  createUserController
)
usersRouter.get("", validateTokenMiddleware, readAllUsersController)
usersRouter.patch(
  "/profile",
  validateTokenMiddleware,
  validateSchemaMiddleware(UserUpdate),
  updateUserController
)

export default usersRouter
