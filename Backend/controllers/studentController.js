const Student = require("../modles/student.modle");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
exports.StudentSingup = async (req, res, next) => {
  try {
    // checking if email is already exist
    const { firstname, lastname, password, email } = req.body;
    const isStudent = await Student.findOne({ email });
    if (isStudent) {
      return res.status(401).json({
        success: false,
        message: "Student is already exist",
      });
    }

    // hashing password
    const hashPassword = await bcrypt.hash(password, 10);

    //insert in db
    const student = await Student.create({
      firstname,
      lastname,
      password: hashPassword,
      email,
    });
    return res.status(201).json({
      success: true,
      message: "Accont Created",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.StudentSingin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    // checking if email is exist
    let student = await Student.findOne({ email });
    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    try {
      const payload = {
        // name: student.firstname,
        id: student._id,
        // role: student.role,
      };
      console.log(req.body);

      const comparePassword = await bcrypt.compare(password, student.password)
      if (comparePassword) {
        let token = jwt.sign(payload, process.env.SECERET_KEY, {
          expiresIn: "2h",
        });

        // student = student.toObject();
        // student.token = token;
        // student.token.password = undefined;

     return res.status(201).cookie("token", token).json({
          success: true,
          message: "successfully Login user",
          name: student.firstname,
          id: student._id,
          role: student.role,
          token: token,
        });

        // return res.status(201).json({
        //   success: true,
        //   message: "Login successfully",
        //   token: token,
        // });
      } else {
        return res.status(404).json({
          success: false,
          message: "Password is incorrect!",
        });
      }
    } catch (error) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
        
      });
    }
  } catch (error) {
    return res.status(401).json({
      success: false,
      message:error.message

    }
)}
};
