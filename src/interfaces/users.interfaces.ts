import { z } from "zod"
import { User, UserReturn } from "../schemas/users.schema"

type IUser = z.infer<typeof User>

type IUserReturn = z.infer<typeof UserReturn>

export { IUser, IUserReturn }
