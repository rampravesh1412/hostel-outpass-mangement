const express = require('express');
const router = express.Router();

const {StaffSingin , StaffSingup} = require('../controllers/staffController')

router.post('/staffsingup' , StaffSingup)
router.post('/staffsingin' , StaffSingin)
module.exports = router