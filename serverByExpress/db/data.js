const mongoose=require('mongoose')
const DB=process.env.DATABASE

const connection=async()=>{
    try {
        await mongoose.connect(DB)
        console.log("mongodb connected")
    } catch (error) {
        console.log(error)
    }
}
connection()