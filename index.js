const express = require("express")
const app = express()
const PORT = 4005;
const ApiRoute = require("./Routes/ApiRoute")
let cors=require("cors")

app.use(cors(
    {
        origin: "*"
    }
))

app.use("/",ApiRoute)

app.listen(PORT,()=>{
    console.log("server is running on port",PORT)
})