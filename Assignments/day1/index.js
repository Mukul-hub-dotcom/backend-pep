var http = require('http');
var fs = require('fs');
const cowsay=require('cowsay')
const params=process.argv[2]
const dns=require('dns');
const { error } = require('console');

const array=["Aman", "Albert", "Varun", "Rajat", "Nrupul"]
const server=http.createServer(function (req, res) {
    if(req.url=='/'){
        res.write("<h1>WELCOME TO EMPLOYEE MANAGEMENT SYSTEM</h1>")
        res.end()
        
    }
    else if(req.url=='/writeinfile'){
        fs.writeFile("employee.txt","Employee names are as follows:",(err,data)=>{
            if(err){
                res.end(err)
            }
            else{
                res.end("<h1>Data has been written in the file</h1>")
            }
        })
        
        
    }
    else if(req.url=='/enternames'){
        array.map((ele)=>{
            fs.appendFile("employee.txt",`\n${ele}`,(err,data)=>{
                if(err){
                    res.end(err)
                }
                else{
                    res.end("<h1>All the names added in the file</h1>")
                }
            })
            

        })
        
        
    }
    else if(req.url=='/alldetails'){
        
            fs.readFile("employee.txt","utf-8",(err,data)=>{
                if(err){
                    res.end(err)
                }
                else{
                    res.end(cowsay.say({
                        text:data
                    }))
                    
                }
            })       
            

        
        
        
    }
    else if(req.url=='/address'){

        dns.lookup(params,(err,address,family)=>{
            res.write("The ip address is \n ")
            res.end(address)
        })
    }

    else if(req.url=='/delete'){

            fs.unlink("./employee.txt",(err)=>{
                if(err){
                    res.end(error)
                }
                else{
                    res.end("file has been deleted")
                }
                
            })
       
            
            
            

                
        
    }
  

})
server.listen(8080,()=>{
    console.log("Server is running on 8080")
});