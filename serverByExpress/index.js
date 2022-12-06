const mongoose=require('mongoose')

const express = require('express')

const app = express()

const DB="mongodb+srv://mernback:mernback@cluster0.jctxuom.mongodb.net/?retryWrites=true&w=majority"
const connection=async()=>{
    try {
        await mongoose.connect(DB)
        console.log("connected")
    } catch (error) {
        console.log(error)
    }
    
}
connection()

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