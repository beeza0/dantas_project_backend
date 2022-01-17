const express = require('express')
const router = express.Router()
const user = require('../models/user')

router.get('/', (req, res) => {
    res.json('Server is running!')
})

/*--- users -- */

router.get('/getAllUsers', (req, res) => { //get all users from database
    user.find({})
    .then(users => {
        res.json(users)
    })
    .catch(err => {
        res.json(err)
    })
})

// router.post('/login', (req, res) => { // log user in the plataform
//     user.findOne({email: req.body.email})
//     .then(user => {
//         if(req.body.password == user.password) res.json(user)
//         else res.json('password doesn't match') // the password doesn't match
//     })
//     .catch(_ => {
//         res.json(error) // error needs to be treated
//     })
// })

// router.post('/signup', (req, res) => { // create new user in the database
//     const signup = new user({
//         email: 'bpires99@gmail.com',
//         password: 'senha'
//     })
//     signup.save()
//     .then(data => {
//         res.json(data)
//     })
//     .catch(err => {
//         res.json(err)
//     })
// })



module.exports = router