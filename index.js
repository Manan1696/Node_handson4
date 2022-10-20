const express = require("express");
const authen = require("./route/authen")
const app = express();
app.use(express.json());
app.use('/authen',authen)

app.get('/',(req,res)=>{
    res.send("working");
})

app.listen(5000,()=>{
    console.log("Working on port 5000");
})