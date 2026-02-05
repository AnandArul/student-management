// const express = require("express");
import express from 'express'
const router = express.Router();
// const { addStudent } = require('../controllers/studentsController')
// const Student = require("../controllers/studentsController")
import Student from '../controllers/studentsController.js'

// router.get('/students', (req, res) => {
//     res.send('Student route working');
// });
router
    .post('/', Student.addStudent)
    .get('/', Student.fetchAll)

export default router;