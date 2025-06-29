import { Request, Response } from "express"
import { getAllUsers } from "../services/user.service"

export const listUsers = async (req: Request, res: Response) => {
    try {
        const users = await getAllUsers()
        res.json(users)
    } catch (err) {
        res.status(500).json({ error: "Erro ao buscar usuários" })
    }
}
