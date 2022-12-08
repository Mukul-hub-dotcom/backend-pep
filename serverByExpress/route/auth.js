const express=require('express')
const router=express.Router()

require('../db/data.js')
const User=require('../model/userSchema.js')

router.get('/',(req,res)=>{
    res.send("Hello world router")
    })

    router.post('/register',(req,res)=>{
        const{name,email,phone,password,cpassword}=req.body
        console.log(name)
        if(!name||!email){
           return res.status(422).json({error:"plz fill data properly"})
        }
        User.findOne({email:email}).then((userExist)=>{
            if(userExist){
                return res.status(422).json({error:"Email alreaady exist"})
            }
            
            const user =new User(req.body)
            user.save().then(()=>{
                res.status(201).json({message:"user registered successfully"})
            })
            .catch((err)=>res.status(500).json({error:"Failed to register"}))

        }).catch(err=>console.log(err))
        // here res will go by middleware in index.js
        res.json({message:req.body})
    })




module.exports=router