import { Router } from "express"
import {
  createUserController,
  deleteUserController,
  readAllUsersController,
  readUserController,
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
usersRouter.get("/profile", validateTokenMiddleware, readUserController)
usersRouter.patch(
  "/profile",
  validateTokenMiddleware,
  validateSchemaMiddleware(UserUpdate),
  updateUserController
)
usersRouter.delete("/profile", validateTokenMiddleware, deleteUserController)

export default usersRouter
