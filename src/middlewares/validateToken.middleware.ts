import { NextFunction, Request, Response } from "express"
import { verify } from "jsonwebtoken"
import "dotenv/config"

const validateTokenMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(" ")[1]

  if (!token) {
    return res.status(401).json({ message: "Missing token." })
  }

  verify(token, process.env.SECRET_KEY!, (error, decode) => {
    if (error) {
      return res.status(401).json({ message: error.message })
    }
    req.userAuthId = decode?.sub + ""
  })

  return next()
}

export default validateTokenMiddleware
