import { Pool } from 'pg';

const { DATABASE, PASS, HOST, USER } = process.env;

const connection = new Pool({
    database: DATABASE,
    password: PASS,
    host: HOST,
    user: USER
})

connection.connect(() => {
    try {
        console.log("Database pg is running");
        return;
    } catch (error) {
        console.log(error);
    }
})

export default connection