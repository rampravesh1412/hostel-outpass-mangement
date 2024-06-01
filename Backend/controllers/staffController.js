const Staff = require("../modles/staff.modle");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.StaffSingup = async (req, res, next) => {
  try {
    // checking if email is already exist
    const { firstname, lastname, password, email } = req.body;
    const isStaff = await Staff.findOne({ email });

    if (isStaff) {
      return res.status(401).json({
        success: false,
        message: "staff is already exist",
      });
    }

    // hashing password
    const hashPassword = await bcrypt.hash(password, 10);

    //insert in db
    const staff = await Staff.create({
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

exports.StaffSingin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    // checking if email is exist
    let staff = await Staff.findOne({ email });
    if (!staff) {
      return res.status(404).json({
        success: false,
        message: "staff not found",
      });
    }

    try {
      const payload = {
        // name: staff.firstname,
        id: staff._id,
        // role: staff.role,
      };

      const compareStaffPassword = await bcrypt.compare(password, staff.password);
      if (compareStaffPassword) {
        let token = jwt.sign(payload, process.env.SECERET_KEY, {
          expiresIn: "2h",
        });

        // staff = staff.toObject();
        // staff.token = token;
        // staff.token.password = undefined;

     return res.status(201).cookie("token", token).json({
          success: true,
          message: "successfully Login user",
          name: staff.firstname,
          id: staff._id,
          role: staff.role,
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
