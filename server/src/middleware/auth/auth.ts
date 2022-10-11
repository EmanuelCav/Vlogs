import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken'

import connection from '../../data/database'

import { IValidation } from "../../interface/Validation";

const { JWT } = process.env;

const auth = async (req: Request, res: Response, next: NextFunction) => {

    try {

        const token = req.headers.authorization?.split(" ")[1]

        if(!token) {
            return res.status(401).json({ message: "Token does not exists" })
        }

        const validation = jwt.verify(token, `${JWT}`) as IValidation

        if(!validation) {
            return res.status(401).json({ message: "Token is not valid" })
        }

        req.user = validation.id;

        const queryUser = `SELECT * FROM users WHERE id=${req.user}`;
        const rows = await connection.query(queryUser)

        if(rows.rowCount == 0) {
            return res.status(401).json({ message: "User does not exists" })
        }

        next();
        
    } catch (error) {
        console.log(error);
        
    }

}

export default auth