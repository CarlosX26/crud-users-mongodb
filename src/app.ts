import { PrismaClient } from "@prisma/client"
import express from "express"

export const prisma = new PrismaClient()

const app = express()

app.use(express.json())

export default app
