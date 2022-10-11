import { Request, Response, NextFunction } from "express";

import connection from "../../data/database";

const userValid = async (req: Request, res: Response, next: NextFunction) => {

    const { nickname, email, password, confirm } = req.body;

    const queryEmail = `SELECT * FROM users WHERE email='${email}'`;
    const queryNickname = `SELECT * FROM users WHERE nickname='${nickname}'`;

    var symbols = ["<", ">", ",", ";", ":", ".", "-", "_", "-", "{", "}", "[", "]", "^", "`", "´", "¨", "+", "*", "~", "|", "°", "¬", "!", '"', "#", "$", "%", "&", "/", "(", ")", "=", "?", "'", "¡", "¿", "@"]
    var upperCases = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

    try {

        if(!nickname || !email || !password || !confirm) {
            return res.status(400).json({ message: "There are empty fields" })
        }

        if(password.length < 8){
            return res.status(400).json({ message: "Password must be more than 8 charactes" })
        }

        if(password != confirm){
            return res.status(400).json({ message: "Passwords do not match" })
        }

        const rowNickname = await connection.query(queryNickname)
        const rowEmail = await connection.query(queryEmail)

        if(rowNickname.rowCount != 0) {
            return res.status(401).json({ message: "Nickname already exists. Please try another" })
        }

        if(rowEmail.rowCount != 0) {
            return res.status(401).json({ message: "Email already exists. Please try another" })
        }

        const emailValid = validateEmail(email)

        if(!emailValid) {
            return res.status(401).json({ message: "That email is not valid. Please try again" })
        }

        for(var i = 0; i < symbols.length; i++) {
            for(var j = 0; j < nickname.length; j++) {
                if(symbols[i] == nickname[j]) {
                    return res.status(401).json({ message: `Symbols like ${symbols[i]} are not allowed in the nickname` })
                }
            }
        }

        var upper = false;

        for(var i = 0; i < upperCases.length; i++) {
            for(var j = 0; j < password.length; j++) {
                if(upperCases[i] == password[j]) {
                    upper = true;
                    break;
                }
            }
        }

        if(!upper) {
            return res.status(400).json({ message: "Password must be at least an uppercase character" })
        }

        next();
        
    } catch (error) {
        console.log(error);
    }

}

const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

export default userValid