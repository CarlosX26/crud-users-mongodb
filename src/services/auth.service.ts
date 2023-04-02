import { prisma } from "../app"
import { IAuth } from "../interfaces/auth.interfaces"
import { sign } from "jsonwebtoken"
import { compare } from "bcryptjs"
import AppError from "../error"
import "dotenv/config"

const authService = async ({ email, password }: IAuth): Promise<string> => {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  })

  if (!user) {
    throw new AppError("Email or password invalid.")
  }

  const validatePassword = await compare(password, user.password)

  if (!validatePassword) {
    throw new AppError("Email or password invalid.")
  }

  const token = sign({}, process.env.SECRET_KEY!, {
    expiresIn: "1h",
    subject: user.id,
  })

  return token
}

export default authService
