// const sqlite3 = require("sqlite3").verbose();
import sqlite3 from "sqlite3";
const sqlite = sqlite3.verbose();

const db = new sqlite3.Database("./student.db", (err) => {
    if (err) console.error(err);
    else console.log("SQLite Connected");
});

export default db;
