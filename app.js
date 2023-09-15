const express = require("express");
const connectDB = require('./utils/db');
const cors = require("cors");

const app = express();
app.use(express.json({ extended: false }));
app.use(cors({ origin: "*" }));
app.use(express.static(__dirname+"/view"));

// connects to db
connectDB();

// primary route declaration 
app.use("/user",require("./routes/user/auth"));
app.use("/match",require("./routes/match/operations"));

const PORT = process.env.PORT || 5000;
console.log(PORT);

//listens to local port
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));