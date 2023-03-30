import { hashSync } from "bcryptjs"
import { z } from "zod"

const User = z.object({
  name: z.string().max(128).min(3),
  email: z.string().email(),
  age: z.number().nonnegative(),
  password: z
    .string()
    .regex(/[A-Z]/)
    .regex(/[a-z]/)
    .transform((password) => hashSync(password, 10)),
})

const UserReturn = User.extend({
  id: z.string(),
}).omit({
  password: true,
})

const AllUsersReturn = z.array(UserReturn)

export { User, UserReturn, AllUsersReturn }
