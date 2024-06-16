const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const corsOption = {
  origin: "http://localhost:5173/",
  methods: "PUT , GET , POST , PATCH , HEAD , PUT",
  credentials: true,
};
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Allow requests from any origin
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  ); // Allow specific HTTP methods
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization"); // Allow specific headers
  if (req.method === "OPTIONS") {
    // Preflight request handling
    res.sendStatus(200);
  } else {
    // Pass the request to the next middleware
    next();
  }
});
app.use(express.json());

const PORT = process.env.PORT || 7100;

// database connection
const database = require("./config/database.js");
database();

// routes
app.get("/", (req, res) => {
  res.send(`<h1 style=" background-color: green; display: inline ">API IS RUNNING AT .. ${PORT}</h1>`);
});

// student routes
const studentRoutes = require("./routes/student.route.js");
const staffRoutes = require("./routes/staff.route.js");
const  studentPassRoutes = require('./routes/confirmPass.js')
const  sendmailerRoutes = require('./routes/sendmailer.js')

app.use("/api/v1/student", studentRoutes);
app.use("/api/v1/staff", staffRoutes);
app.use("/api/v1/student" ,studentPassRoutes )
app.use("/api/v1" , sendmailerRoutes)
app.listen(PORT, () => {
    console.log(`this app is running at ${PORT}...`);
  });
  
