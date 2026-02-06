// const db = require("../db/connect.js");
import db from '../db/connect.js'

const createTable = () => {
    const sql = `
        CREATE TABLE IF NOT EXISTS students (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            age INTEGER,
            gender TEXT,
            class TEXT,
            section TEXT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `;

    db.run(sql, (err) => {
        if (err) {
            console.error("Error creating students table:", err.message);
        } else {
            console.log("Students table ready");
        }
    });
};

const fetchAll = (student, callback) => {
    const sql = `SELECT * FROM students`
    db.all(sql, [], (err, data) => {
        if (err) callback(err)
        callback(null, data)
    })
}

const create = (student, callback) => {
    const sql = `
        INSERT INTO students (name, age, gender, class, section)
        VALUES (?, ?, ?, ?, ?)
    `;
    db.run(
        sql,
        [student.name, student.age, student.gender, student.class, student.section],
        function (err) {
            if (err) return callback(err);

            callback(null, {
                message: "Student created",
                id: this.lastID,
            });
        }
    );
}

const read = (studentId, callback) => {
    const sql = `SELECT * FROM students WHERE id=?`

    db.get(sql, [studentId], (err, data) => {
        if (err) { callback(err) }
        callback(null, data)
    })
}

const update = (studentId, student, callback) => {
    const sql = `UPDATE students SET name=?, age=?, gender=?, class=?, section=? WHERE id=?`
    db.run(sql, [student.name, student.age, student.gender, student.class, student.section, studentId], (err) => {
        if (err) { callback(err) }
        callback(null, { message: "Student updated", changes: this })
    })
}

const remove = (studentId, callback) => {
    const sql = `DELETE FROM students WHERE id=?`
    db.run(sql, [studentId], (err, data) => {
        if (err) { callback(err) }
        callback(null, { message: "Student Deleted" })
    })
}

export default { createTable, fetchAll, create, read, update, remove };

