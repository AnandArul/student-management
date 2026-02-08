// const express = require("express");
import express from 'express'
const router = express.Router();

import Authentication from '../middleware/Authentication.js';

import Student from '../controllers/studentsController.js'

router
    .use(Authentication.authenticate)
    .get('/', Student.fetchAll)
    .post('/', Student.addStudent)
    .get('/:id', Student.read)
    .put("/:id", Student.update)
    .delete("/:id", Student.remove)

export default router;