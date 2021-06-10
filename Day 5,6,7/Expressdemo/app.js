const express=require('express')
const app=express()
const port=3000

app.get('/',(req,res)=>{
    res.send('HEllo World!')
})
app.get('/contactt',(req,res)=>{
    res.send('HEllo Contact!')
})
app.get('/about',(req,res)=>{
    res.send('HEllo About!')
})

app.listen(port,()=>{
    console.log('example app listening at port no.3000')
})