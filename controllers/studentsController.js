import Students from '../models/studentModel.js'

const addStudent = (req, res) => {
    Students.create(req.body, function (err) {
        if (err) return res.status(500).send(err);
        res.send({ message: "Student Added" });
    });
}

const fetchAll = (req, res) => {
    Students.fetchAll(req.body, (err, data) => {
        if (err) { res.send({ message: "Error", code: 400 }) }
        res.send({ result: data })

    })
}

export default { addStudent, fetchAll }