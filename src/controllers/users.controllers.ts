import { Request, Response } from "express"
import createUserService from "../services/createUser.service"
import readAllUsersService from "../services/readAllUsers.service"
import updateUserService from "../services/updateUser.service"
import deleteUserService from "../services/deleteUser.service"
import readUserService from "../services/readUser.service"

const createUserController = async (req: Request, res: Response) => {
  const data = await createUserService(req.body)

  return res.status(201).json(data)
}

const readUserController = async (req: Request, res: Response) => {
  const data = await readUserService(req.userAuthId)

  return res.status(200).json(data)
}

const readAllUsersController = async (req: Request, res: Response) => {
  const data = await readAllUsersService()

  return res.status(200).json(data)
}

const updateUserController = async (req: Request, res: Response) => {
  const data = await updateUserService(req.userAuthId, req.body)

  return res.status(200).json(data)
}

const deleteUserController = async (req: Request, res: Response) => {
  await deleteUserService(req.userAuthId)

  return res.status(204).send()
}

export {
  createUserController,
  readUserController,
  readAllUsersController,
  updateUserController,
  deleteUserController,
}
