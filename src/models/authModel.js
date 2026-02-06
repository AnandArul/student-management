import db from '../db/connect.js'
import bcrypt from 'bcryptjs'

const createTable = () => {
    const sql = `CREATE TABLE IF NOT EXISTS users(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        role TEXT CHECK (role IN ('admin', 'teacher')) NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`

    db.run(sql, (err) => {
        if (err) {
            console.log('Error while creating table', err.message)
        } else {
            console.log("Users table created")
        }

    })
}

const registerUser = async (user, callback) => {
    const password = await bcrypt.hash(user.password, 10)
    const sql = `INSERT INTO users (name, email, password, role) VALUES(?, ?, ?, ?)`
    db.run(sql, [user.name, user.email, password, user.role], (err) => {
        if (err) {
            callback(err)
        }
        callback(null, { message: "User saved", })
    })
}

const findByMail = (userMail, callback) => {
    const sql = `SELECT * FROM users WHERE email=?`
    db.get(sql, [userMail], (err, data) => {
        if (err) {
            console.log(err)
            callback(err)
        } else {
            callback(null, data)
        }
    })
}



export default { createTable, registerUser, findByMail }