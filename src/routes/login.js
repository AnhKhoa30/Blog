const express = require('express')
const router = express.Router()

const loginController = require('../app/controllers/loginController')


router.get('/signup',loginController.signup)
router.post('/signup',loginController.UpdateSignup)
router.get('/login',loginController.login)
router.post('/login',loginController.Checklogin)

module.exports =router;
