import { Router } from "express"
import { Auth } from "../schemas/auth.schema"
import { authController } from "../controllers/auth.controller"
import validateSchemaMiddleware from "../middlewares/validateSchema.middleware"

const authRouter = Router()

authRouter.post("", validateSchemaMiddleware(Auth), authController)

export default authRouter
