// const express = require("express");
import express from 'express'
const app = express();

import StudentRouter from './src/routes/students.js'
import StudentModel from './src/models/studentModel.js'

StudentModel.createTable()

app.use(express.json());

app.use("/api/students", StudentRouter);
// app.use("/teachers", require("./routes/teachers"));
// app.use("/marks", require("./routes/marks"));
// app.use("/dashboard", require("./routes/dashboard"));

app.listen(3000, () => console.log("Server running on port 3000"));