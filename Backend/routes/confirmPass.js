const express = require('express');
const router = express.Router();

const {savePassData , getData} = require('../controllers/confirmPassController')

router.post('/passdata' , savePassData)
router.get('/getdata' , getData)


module.exports = router;