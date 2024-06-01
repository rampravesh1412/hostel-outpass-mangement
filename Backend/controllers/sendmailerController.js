const nodemailer = require("nodemailer");
const PassSchema = require('../modles/confirmPass.modle')


exports.sendmailerController = async(req , res) => {
    // try {
    //     const {email} = req.body;
    //     const user = await PassSchema.findOne({email: email});
    //     if(!user){
    //         return res.status(404).json({
    //             message: "User Not Found"
    //         })
    //     }


    //     const transporter = nodemailer.createTransport({
    //         host: "smtp.ethereal.email",
    //         port: 587,
    //         secure: false, // Use `true` for port 465, `false` for all other ports
    //         auth: {
    //           user: "rampraveshkcse@gmail.com",
    //           pass: "aymzxslcktqeuhiv",
    //         },
    //       });


    //       async function main() {
    //         // send mail with defined transport object
    //         const info = await transporter.sendMail({
    //           from: '"Maddison Foo Koch 👻" <rampraveshkcse@gmail.com>', // sender address
    //           to: email, // list of receivers
    //           subject: "Outpass Mangement System", // Subject line
    //           text: "Hello world?", // plain text body
    //           html: "<b>Hello world?</b>", // html body
    //         });
          
    //         console.log("Message sent: %s", info.messageId);
    //         // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
    //       }
          
    //       main().catch(console.error);

    //       return res.status(201).json({
    //         message: "Mail Sent Successfully",
    //         data: {
    //             user: req.user,
    //             info: info
    //         }

    //       })
        
    // } catch (error) {
    //     res.status(500).json({
    //         message: "Internal Server Error",
    //         error: error.message
    //     })
        
    // }

}

