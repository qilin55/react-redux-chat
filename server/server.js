const express = require('express')
const mongoose = require('mongoose')
//链接mongo 并且使用coby这个集合
const DB_URL = 'mongodb://localhost:27017/data'
mongoose.connect(DB_URL)
mongoose.connection.on('connected',function () {
    console.info('mongo connect success')
})

const User = mongoose.model('user',new mongoose.Schema({
    user:{type:String,require:true},
    age:{type:Number,require:true}
}))

//新增一条数据到数据库

// User.create({
//     age:12,
//     user:'coby'
// },function (err, doc) {
//     if(!err){
//         console.info(doc)
//     }else{
//         console.info(err)
//     }
// })

//删除数据
// User.remove({age:18},function (err,doc) {
//     console.info(doc)
// })

//更新数据
// User.update({'user':'nami'},{'$set':{age:18}},function (err,doc) {
//     console.info(doc)
// })

// 新建APP
const app = express()

app.get('/',function(req,res){
    res.send('<h1>Hello world</h1>')
})

//查找数据 find() 是查找出符合条件的对象集合，是一个[],findOne() 是查找出来一条数据，是一个{}

app.get('/data',function(req,res){
    User.find({},function (err,doc) {
       res.json(doc)
    })
    // res.json({name:'coby',work:'frontend',age:18})
})

app.listen(9000,function(){
    console.info('Node app start at port 9000')
})