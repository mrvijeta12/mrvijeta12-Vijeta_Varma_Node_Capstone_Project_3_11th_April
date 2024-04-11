const express = require('express');
const mongoose =require('mongoose');
const dotenv = require('dotenv').config();

mongoose.connect(process.env.MONGO_URI)
.then(()=>{console.log("connected")})
.catch(err=>{console.log(err)})

const app = express();
app.use(express.json())
app.use(require('cors')());
app.use("/uploads",express.static('uploads'))
app.use("/api/user",require("./routes/userRoutes"))

app.listen(process.env.PORT,()=>{
console.log("server started")
})
