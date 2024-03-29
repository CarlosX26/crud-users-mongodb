import "express-async-errors"
import { PrismaClient } from "@prisma/client"
import express, { Request, Response, NextFunction } from "express"
import AppError from "./error"
import usersRouter from "./routes/users.routes"
import authRouter from "./routes/auth.routes"

export const prisma = new PrismaClient()

const app = express()

app.use(express.json())

app.use("/auth", authRouter)
app.use("/users", usersRouter)

app.use(
  (err: Error | AppError, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return res.status(err.statusCode).json({ message: err.message })
    }

    console.log(err)

    return res.status(500).json({ message: "Internal server error." })
  }
)

export default app
