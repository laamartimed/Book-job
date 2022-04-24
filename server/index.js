require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const entrepriseRoutes = require("./routes/entreprise");
const jwt = require("jsonwebtoken");

// database connection  
connection();

// middlewares
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
    console.log('rani f  midllware');
    //const token = req.cookies.user;
    //console.log(token);
    next();
});
  
// routes      
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/entreprise", entrepriseRoutes);


const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));
