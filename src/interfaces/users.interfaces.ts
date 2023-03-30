import { z } from "zod"
import { AllUsersReturn, User, UserReturn } from "../schemas/users.schema"

type IUser = z.infer<typeof User>

type IUserReturn = z.infer<typeof UserReturn>

type IAllUserReturn = z.infer<typeof AllUsersReturn>

export { IUser, IUserReturn, IAllUserReturn }
