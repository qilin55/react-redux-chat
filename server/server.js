const express = require('express')
// 新建APP
const app = express()

app.get('/',function(req,res){
    res.send('<h1>Hello world</h1>')
})

app.get('/data',function(req,res){
    res.json({name:'coby',work:'frontend',age:18})
})

app.listen(9000,function(){
    console.info('Node app start at port 9000')
})