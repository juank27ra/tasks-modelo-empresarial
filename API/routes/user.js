const express = require('express');
// const { Router } = require('express');
const router = express.Router()
const User = require('../models/User')


router.get('/register', async (req, res) => {
    try {
        const user = await User.find()

    } catch (error) {
        console.log(error)
    }
})
router.post('/register', async (req, res, next) => {
    try {
        const user =await User.create({
            email: req.body.email, 
            password: req.body.password
        })
        res.redirect('/login')
    } catch (error) {
        console.log(error)
    }
})

router.get('/login', (req, res, ) => {
    
})

router.post('/login', async(req, res, next) => {
    const {email, password} = req.body
    try {
        const user = await User.authenticate(email, password)
        if(user){
           req.session.userId = user._id 
           return res.redirect('/')
        } else {
            res.redirect('/login', {error: 'error en Email o Password. Vulelva a intentarlos'})
        }
    } catch (error) {
        console.log(error)
    }
})

router.get('/logout', (req, res, ) => {
    res.session = null
    res.clearCookie('session')
    res.clearCookie('session.sig')
    res.redirect('/login')
})