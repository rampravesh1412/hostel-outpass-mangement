const express = require('express');
const router = express.Router();
const {sendmailerController} = require('../controllers/sendmailerController')

router.post('/sendmailer' , sendmailerController)

module.exports = router;