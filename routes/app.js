var express = require('express'); 
var router = express.Router();
var studentModel = require('../src/student/studentModel');

// router.get('/', function (req, res, next) {
//     res.render('index');
// });

router.post('/student/create', async function (req, res, next) {
    const student = new studentModel(req.body);

    try {
        await student.save();
        res.status(201).send({
            "status": true,
            "message": "Estudante criado."
        });
    } 
    catch (error) {
        res.status(400).send(error);
    }
});

router.get('/students', async(req,res)=>{
   
    try{
        const students = await studentModel.find({});
        res.send(students);
    }
    catch(error)
    {
        res.status(400).send(error);
    }
});

router.get('/students/:id', async function (req, res, next) {
    try {
        const _id = req.params.id;
        const students = await studentModel.findById({_id})

        if(!students) {
            return res.status(404).send
        }

        return res.status(200).send(students);
    }
    catch (error) {
        res.status(400).send(error);
    }
});

router.patch('/students/:id', async function (req, res, next) {
    try {
        const _id = req.params.id;
        const body = req.body;
        const updatedStudents = await studentModel.findByIdAndUpdate(_id, body, {new: true});

        if(!updatedStudents) {
            return res.status(404).send
        }

        res.status(201).send({
            "status": true,
            "message": "Estudante atualizado."
        });
    }
    catch (error) {
        res.status(400).send(error);
    }
});

router.delete('/students/:id', async function (req, res, next) {
    try {
        const _id = req.params.id;
        const deletedStudents = await studentModel.findByIdAndDelete(_id);

        if(!deletedStudents) {
            return res.status(404).send
        }

        res.status(201).send({
            "status": true,
            "message": "Estudante deletado."
        });
    }
    catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;