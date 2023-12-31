import {createPool} from "mysql2/promise"
import {
    DB_HOST,
    DB_USER,
    DB_PASSWORD,
    DB_NAME,
    DB_PORT
} from "./config.js"

//createPool no requiere await y funcion async, pero createConnection si
export const pool = createPool({
    user: DB_USER,
    password: DB_PASSWORD,
    host: DB_HOST,
    port: DB_PORT,
    database: DB_NAME,
})


