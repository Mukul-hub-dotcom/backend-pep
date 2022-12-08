
const dotenv=require('dotenv')
const express = require('express')

const app = express()

dotenv.config({path:'./config.env'})
require("./db/data.js")  
app.use(express.json())

// const User=require('./model/userSchema.js')
app.use(require('./route/auth.js'))



const middleware=(req,res,next)=>{
    console.log("Hello from middleware")
    next();
}




app.get('/',(req,res)=>{
res.send("Hello world")
})
app.get('/about',middleware,(req,res)=>{
    console.log("to check if middleware running")
    res.send("Hello from about")
    })
app.get('/contact',(req,res)=>{
    res.send("Hello from contact")
    })
app.get('/signin',(req,res)=>{
    res.send("Hello from signin")
    })
    app.get('/signup',(req,res)=>{
        res.send("Hello signup")
        })

    


app.listen(3000, () => {
    console.log(`Server is Listening on 3000`)
})