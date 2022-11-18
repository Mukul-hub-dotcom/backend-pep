const express = require('express')

const app = express()
app.get('/',(req,res)=>{
    res.send("jannat")
})

app.listen(3000, () => {
    console.log(`Server is Listening on 3000`)
})