const express = require('express');
const { Router } = require('express');
const router = express.Router()
const Task = require('../models/Task')


// router.get('/', (req, res) => {
//     Task.find(function(err, task) {
//         console.log(task)
//     })
//     res.json({
//         status: 'API works!'
//     })
// })

// router.get('/', (req, res) => {
//     Task.find()
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
// })
router.get('/', async(req, res) => {
    try {
        const tasks = await Task.find()
    tasks.map(e => {
        return (
            title = e.title,
            description = e.description,
            created = e.created,
            fulfilled = e.fulfilled,
            maximum_date= e.maximum_date, 
            responsible= e.responsible
            )
        })
    res.json(tasks)
    } catch (error) {
        console.log(error)
    }
    
})

router.post('/', async(req, res) => {
    const { title, description, created, fulfilled, maximum_date, responsible } = req.body
   try {
    const task = new Task({
        title, 
        description,
        created,
        fulfilled,
        maximum_date, 
        responsible
    })
    await task.save()
    res.json({
        status: 'tasks save'
    })
    } catch (error) {
    res.status(404).send(console.log(error))
    }
})

router.get('/:id', async(req, res) => {
    try {
        const {id} = req.params
        const task = await Task.findById(id)
        res.status(200).json(task)
    } catch (error) {
        res.status(404).send(error, "Id no encontrado")
    }
})

router.put('/:id', async(req, res) => {
    try {
        const {id} = req.params
        const {title, description, date_create, fulfilled, maximum_date, responsible  } = req.body
        const newtask = { title, description, date_create, fulfilled, maximum_date, responsible }
        await Task.findByIdAndUpdate(id, newtask);
        res.json({status: 'task update'})
    } catch (error) {
        res.status(404).send(console.log(error))
    }

})

router.delete('/:id', async(req, res) => {
    try {
        const {id} = req.params
        if(!id) res.send("id no existe")
        await Task.findByIdAndRemove(req.params.id);
        res.json({status: 'task delete'}) 
    } catch (error) {
        res.status(404).send(console.error(error))
    }
})



module.exports = router