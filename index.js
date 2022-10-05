const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

dotenv.config();
mongoose.connect(process.env.MONGO_URL, 
    {useNewUrlParser: true , useUnifiedTopology: true },
    ()=>{
    console.log("Connected to  MongoDB")
});
const userRoute = require("./routes/users")
const authRoute = require("./routes/auth")
//Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.get("/",(req,res)=>{
    res.send("Welcome to Homepage");  
})

app.get("/users",(req,res)=>{
    res.send("Welcome to Users page");  
})



app.listen(3000,()=>{
console.log("Backend server is Up and Running");
}
)

