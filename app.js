// const express = require("express");
import express from 'express'
const app = express();

import dotenv from 'dotenv';
dotenv.config();

import StudentRouter from './src/routes/studentRouter.js'
import AuthRouter from './src/routes/authRouter.js'

import StudentModel from './src/models/studentModel.js'
import AuthModel from './src/models/authModel.js'

StudentModel.createTable()
AuthModel.createTable()

app.use(express.json());

app.use("/api/students", StudentRouter);
app.use("/api", AuthRouter)
// app.use("/teachers", require("./routes/teachers"));
// app.use("/marks", require("./routes/marks"));
// app.use("/dashboard", require("./routes/dashboard"));

app.listen(3000, () => console.log("Server running on port 3000"));