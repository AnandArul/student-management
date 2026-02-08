import express from 'express'
const router = express.Router()

import Authentication from '../middleware/Authentication.js'
import AuthController from '../controllers/authController.js'

router
    .post("/auth/login", AuthController.login)

router.use(Authentication.authenticate)
    .post("/auth/register", AuthController.registerUser)
// .get('/users', AuthController.fetchAll)
// .post("/users", AuthController.saveUser)
// .get("/users/:id", AuthController.read)
// .put("/users/:id", AuthController.updateUser)

export default router;