import { prisma } from "./../app"
import { NextFunction, Request, Response } from "express"

const verifyEmailExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const email = await prisma.user.findUnique({
    where: { email: req.body.email },
  })

  if (email) {
    return res.status(409).json({ message: "Email already exists." })
  }

  return next()
}

export default verifyEmailExistsMiddleware
