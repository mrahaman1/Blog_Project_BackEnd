const express = require("express")
const app = express()
const PORT = 4005;
const ApiRoute = require("./Routes/ApiRoute")
let cors=require("cors")

app.use(cors(
    {
        origin: "*"
<<<<<<< HEAD
    }
))
=======
        ))
>>>>>>> 8843c7fdefacd36fb9aa05f31cc182d03bd5c04f

app.use("/",ApiRoute)

app.listen(PORT,()=>{
    console.log("server is running on port",PORT)
})
