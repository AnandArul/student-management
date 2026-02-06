import express from 'express'
const router = express.Router()

import AuthController from '../controllers/authController.js'

router
    .post("/auth/register", AuthController.registerUser)
    .post("/auth/login", AuthController.login)
// .get('/users', AuthController.fetchAll)
// .post("/users", AuthController.saveUser)
// .get("/users/:id", AuthController.read)
// .put("/users/:id", AuthController.updateUser)

export default router;