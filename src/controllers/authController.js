import db from '../db/connect.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import Auth from '../models/authModel.js'


const registerUser = (req, res) => {
    Auth.registerUser(req.body, (err, data) => {
        if (err) {
            res.send(err)
        }
        else {
            res.send({ result: data })
        }
    })
}

const login = (req, res) => {
    Auth.findByMail(req.body.email, async (err, data) => {
        if (err || !data) {
            res.status(401).send('Invalid email')
        } else {
            const isValid = await bcrypt.compare(req.body.password, data.password)
            console.log(isValid)
            if (!isValid) {
                res.status(401).send('Invalid password')
            } else {
                const token = jwt.sign(
                    { id: data.id, name: data.name, role: data.role, email: data.email },
                    process.env.JWT_SECRET,
                    { expiresIn: "3d" }
                )
                res.send({ token, user: data });
                // res.send(data)
            }
            // res.send(err)
        }
    })
    // res.send(req.body)
}


export default { registerUser, login }