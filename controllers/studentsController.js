import Students from '../models/studentModel.js'

const fetchAll = (req, res) => {
    Students.fetchAll(req.body, (err, data) => {
        if (err) { res.send({ message: err }) }
        res.send({ result: data })

    })
}

const addStudent = (req, res) => {
    Students.create(req.body, (err, data) => {
        if (err) return res.status(500).send(err);
        res.send({ message: data });
    });
}

const read = (req, res) => {
    Students.read(req.params.id, (err, data) => {
        if (err) { res.send({ message: err }) }
        res.send({ result: data })
    })
}

const update = (req, res) => {
    Students.update(req.params.id, req.body, (err, data) => {
        if (err) { res.send(err) }
        res.send({ message: data.message })
    })
}

const remove = (req, res) => {
    Students.remove(req.params.id, (err, data) => {
        if (err) { res.send(err) }
        res.send({ message: data.message })
    })
}



export default { fetchAll, addStudent, read, update, remove }