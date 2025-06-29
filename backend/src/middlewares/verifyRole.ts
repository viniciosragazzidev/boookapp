import { Request, Response, NextFunction } from "express"
import { Role } from "@prisma/client"

export function verifyRole(allowedRoles: Role[]) {
    return (req: Request, res: Response, next: NextFunction): void => {
        const userRole = req.headers["x-user-role"] as Role

        if (!allowedRoles.includes(userRole)) {
            res.status(403).json({ error: "Acesso negado" })
            return // ← importantíssimo!
        }

        next()
    }
}
