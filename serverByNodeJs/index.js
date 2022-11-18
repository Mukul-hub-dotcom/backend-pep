const fs = require('fs')
const http= require('http')


const server=http.createServer(function(req,res){
    let path='./views'
    switch(req.url){
        case'/':
        path+='/index.html'
        break;
        case'/about':
        path+='/about.html'
        break;
        default:
            
            res.statusCode=404
            path+='/err.html'
            break;
    }
    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err)
        }
        else{
            res.write('<h1>Hey buddy</h1>')
    console.log('server connected successfully')
            res.end(data)
        }
        
    })
    
})

server.listen(5000)
