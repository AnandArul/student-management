// const express = require("express");
import express from 'express'
const router = express.Router();
import Student from '../controllers/studentsController.js'

router
    .get('/', Student.fetchAll)
    .post('/', Student.addStudent)
    .get('/:id', Student.read)
    .put("/:id", Student.update)
    .delete("/:id", Student.remove)

export default router;