import { Router } from "express"
import validateSchemaMiddleware from "../middlewares/validateSchema.middleware"
import { Auth } from "../schemas/auth.schema"
import { authController } from "../controllers/auth.controller"

const authRouter = Router()

authRouter.post("", validateSchemaMiddleware(Auth), authController)

export default authRouter
