const express = require("express")
const app = express()
const PORT = 4005;
const ApiRoute = require("./Routes/ApiRoute")
const cors=require("cors")

app.use(cors())
app.use("/", ApiRoute)

app.listen(PORT,()=>{
    console.log("server is running on port",PORT)
})
