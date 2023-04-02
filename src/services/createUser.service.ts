import { prisma } from "../app"
import { IUser, IUserReturn } from "../interfaces/users.interfaces"
import { UserReturn } from "../schemas/users.schema"

const createUserService = async (payload: IUser): Promise<IUserReturn> => {
  const newUser = await prisma.user.create({
    data: {
      ...payload,
    },
  })

  return UserReturn.parse(newUser)
}

export default createUserService
