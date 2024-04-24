const mongoose = require('mongoose');
require('dotenv').config();

const database = async (req , res) => {
    try {
        await mongoose.connect(process.env.DB_URL , {
            useNewUrlParser : true,
            useUnifiedTopology : true
        }).then(() => {
            console.log('Database connected');
        }).catch((err) => {
            console.log(err);
            console.log("database connection failed")
            process.exit(1)
        })
        
    } catch (error) {
        return res.status(401).json({
            success : false,
            message : error.message,
            
        })
        
    }

}

module.exports = database;