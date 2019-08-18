const express = require('express')
const app = express()
const hbs = require('hbs')

app.set('view engine',hbs)

app.use(express.static(__dirname+'/public'))

app.use(date = (req, res, next)=> {
    let requestAt = new Date()
    if((requestAt.getHours() < 8) || (requestAt.getHours() > 17)){
        res.send('Our office is not open now')
    }
    console.log(requestAt.getHours())
    next()
})


app.get('/home',(req,res)=>{
    res.render('home.hbs')
})

app.get('/services',(req,res)=>{
    res.render('ourservices.hbs')
})

app.get('/contact',(req,res)=>{
    res.render('contact.hbs',{email:'amraoui.amina@gmail.com', tel:53299299})
})


app.listen(3000, (err)=>{
    if (err){
        console.log(err)
    }else{
        console.log('server is running')
    }
})