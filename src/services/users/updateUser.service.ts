import { prisma } from "../../app"
import { IUserReturn, IUserUpdate } from "../../interfaces/users.interfaces"
import { UserReturn } from "../../schemas/users.schema"
import AppError from "../../error"

const updateUserService = async (
  userAuthId: string,
  payload: IUserUpdate
): Promise<IUserReturn> => {
  if (!Boolean(Object.keys(payload).length)) {
    throw new AppError("Empty body.")
  }

  const user = await prisma.user.update({
    where: {
      id: userAuthId,
    },
    data: { ...payload },
  })

  return UserReturn.parse(user)
}

export default updateUserService
