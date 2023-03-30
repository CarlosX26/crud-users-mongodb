import { Auth } from "../schemas/auth.schema"
import { z } from "zod"

type IAuth = z.infer<typeof Auth>

export { IAuth }
