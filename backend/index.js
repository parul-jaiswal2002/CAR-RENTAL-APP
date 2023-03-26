require("dotenv").config() 

const express = require("express")
const mongoose = require("mongoose") 
const userRouter = require('./routes/user')
const carRouter = require('./routes/car')

//express app
const app = express()


//middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path,req.method)
    next()
})

//connnect to db
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(process.env.PORT, () => {       
        console.log("successfully connected to db and listening to the server on port 4000 !!!")
    })
})
.catch((error) => {
    console.log(error)
})



//routing
app.use('/carRental/user' ,userRouter)
app.use('/carRental/car' ,carRouter)




