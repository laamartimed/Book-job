require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const entrepriseRoutes = require("./routes/entreprise");
const cookieParser = require('cookie-parser')

// database connection  
connection();

// middlewares
app.use(express.json());
app.use(cookieParser());    
app.use(cors());

// routes      
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/entreprise", entrepriseRoutes);

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));
