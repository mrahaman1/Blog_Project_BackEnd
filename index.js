const express = require("express")
const app = express()
const Port = 4005;
const ApiRoute = require("./Routes/ApiRoute")
const cors=require("cors")

app.use(cors())
app.use("/", ApiRoute)

app.listen(Port,()=>{
    console.log("server is running on port",Port)
})
