const PassSchema = require('../modles/confirmPass.modle');

exports.savePassData = async(req , res ,next) => {
    try {
        const {fullname , branch ,registrationNumber ,email, phone , reason , checkout , checkin , roomnum , year} = req.body;
        const pass = new PassSchema({
            fullname , branch ,registrationNumber ,email, phone , reason , checkout , checkin ,  roomnum , year

        });
        const result = await pass.save();
        // console.log(result);

        return res.status(201).json({
            success : true,
            message : "OutPass data are sended to staff Member",
            data : result
        })

        
    } catch (error) {
        return res.status(400).json({
            success : false,
            message : "OutPass data are not sended to staff Member",
            data : error
        })
        
    }

}



exports.getData = async(req , res) => {
    try {
        const result = await PassSchema.find();
        return res.status(201).json({
            success : true,
            message : "Data fatched...",
            data : result

        })
    }catch{
        return res.status(400).json({
            success : false,
            message : "Data not fatched...",
            data : error

        })

    }
}