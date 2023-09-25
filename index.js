const express=require("express")
const port =process.env.port || 1420
const app=express()


app.get('/',(req,res)=>{
    res.send("hello world")
})

app.listen(port,()=>{
    console.log("application is running on port:",port)
})