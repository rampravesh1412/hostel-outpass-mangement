const express = require('express');
const router = express.Router();


// import controller
const {StudentSingup , StudentSingin} = require('../controllers/studentController')

router.post('/studentsingup' , StudentSingup)
router.post('/studentsingin' , StudentSingin)





// export 
module.exports = router;