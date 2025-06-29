import { Router } from "express"
import { listUsers } from "../controllers/user.controller"
import { verifyRole } from "../middlewares/verifyRole"
import { Role } from "@prisma/client"

const router = Router()

router.get("/", verifyRole([Role.ADMIN]), listUsers)

export default router
