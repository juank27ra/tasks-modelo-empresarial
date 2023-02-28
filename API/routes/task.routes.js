const express = require('express');
// const { Router } = require('express');
const router = express.Router()
const Task = require('../models/Task')
// const {requiredUser} = require('../index')


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





router.get('/', async(req, res) => {
    const {title} = req.body
    try {
        const find = await Task.findOne()
        res.status(201).send({message: 'Tarea Encontrada'})
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
    res.status(200).json({
        status: task
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
        const newtask = await Task.findByIdAndUpdate(id, req.body);
        res.status(200).json(newtask)
    } catch (error) {
        res.status(404).send(console.log(error))
    }

})

router.delete('/:id', async(req, res) => {
    try {
        const {id} = req.params
        if(!id) res.send("id no existe")
        await Task.findByIdAndRemove(req.params.id);
        res.status(200).json(`La tarea ${id} ha sido eliminada`) 
    } catch (error) {
        res.status(404).send(console.error(error))
    }
})



module.exports = router