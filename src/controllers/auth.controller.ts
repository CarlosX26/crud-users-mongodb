import { Request, Response } from "express"

const authController = async (req: Request, res: Response) => {
  const data = await undefined

  return res.status(200).json(data)
}

export { authController }
