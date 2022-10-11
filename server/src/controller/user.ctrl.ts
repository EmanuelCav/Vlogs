import { Request, Response } from "express";
import { QueryResult } from "pg";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import connection from "../data/database";

import { IUser } from "interface/User";

const { JWT } = process.env;

export const users = async (req: Request, res: Response): Promise<Response> => {

    const query = `SELECT * FROM users`;

    try {

        const rowsUsers: QueryResult = await connection.query(query)

        const showUsers = rowsUsers.rows;
        const amountOfUsers = rowsUsers.rowCount;

        return res.status(200).json({
            users: showUsers,
            amount: amountOfUsers
        })
        
    } catch (error: any) {
        return res.status(500).json({ message: error.message })
    }

}

export const usersSugested = async (req: Request, res: Response): Promise<Response> => {

    const { email } = req.params;

    const query = `SELECT * FROM users`;
    const user = `SELECT * FROM users WHERE email='${email}'`;

    try {

        const rowsUsers: QueryResult = await connection.query(query)
        const rowUser: QueryResult = await connection.query(user)
        
        const showUsers = rowsUsers.rows.filter((user) => user.email != rowUser.rows[0].email)

        return res.status(200).json(showUsers)
        
    } catch (error: any) {
        return res.status(500).json({ message: error.message })
    }

}

export const user = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params;

    const query = `SELECT * FROM users WHERE id=${id}`;

    try {

        const rowsUser: QueryResult = await connection.query(query)

        const showUser = rowsUser.rows[0]

        return res.status(200).json(showUser)
        
    } catch (error: any) {
        return res.status(500).json({ message: error.message })
    }

}

export const register = async (req: Request, res: Response): Promise<Response> => {

    const { nickname, email, password } = req.body;

    const salt = await bcrypt.genSalt(8)
    const pass = await bcrypt.hash(password, salt)

    const query = `INSERT INTO users(nickname, email, pass, created, picture) 
    VALUES('${nickname}', '${email}', '${pass}', NOW(), 'https://recursospracticos.com/wp-content/uploads/2017/10/Sin-foto-de-perfil-en-Facebook.jpg');
    `;

    const queryFound = `SELECT * FROM users WHERE email='${email}'`;

    try {

        await connection.query(query)
        
        const user: QueryResult = await connection.query(queryFound)

        const token = jwt.sign({ id: user.rows[0].id }, `${JWT}`, {
            expiresIn: '7d'
        })
        
        return res.status(200).json({
            user: user.rows[0],
            token
        })
        
    } catch (error: any) {
        return res.status(500).json({ message: error.message })
    }

}

export const login = async (req: Request, res: Response): Promise<Response> => {

    const { email, password } = req.body;

    const query = `SELECT * FROM users WHERE email='${email}'`;

    try {

        if(!email || !password) {
            return res.status(400).json({ message: "There are empty fields" })
        }

        const user: QueryResult = await connection.query(query)

        if(user.rowCount == 0) {
            return res.status(400).json({ message: "User does not exists" })
        }

        const showUser: IUser = user.rows[0]

        const validation = await bcrypt.compare(password, showUser?.pass)

        if(!validation) {
            return res.status(400).json({ message: "Fields do not match" })
        }

        const token = jwt.sign({ id: showUser.id }, `${JWT}`, {
            expiresIn: '7d'
        })

        return res.status(200).json({
            user: showUser,
            token
        })
        
    } catch (error: any) {
        return res.status(500).json({ message: error.message })
    }

}

export const removeUser = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params;

    const query = `DELETE FROM users WHERE id=${id}`;
    const queryUser = `SELECT * FROM users WHERE id=${id}`;

    try {
        
        const rows = await connection.query(queryUser)

        if(rows.rowCount == 0) {
            return res.status(401).json({ message: "User does not exists" })
        }

        await connection.query(query)

        return res.status(200).json({ message: "User was removed" })
        
    } catch (error: any) {
        return res.status(500).json({ message: error.message })
    }

}

