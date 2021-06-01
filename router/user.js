const express=require('express')
const router = express.Router()
const UserModel= require('../model/user')

router.post('/user',(req,res)=>{
    const {firstname,lastname,email,password}=req.body
    const newUser= new UserModel({
        firstname,
        lastname,
        email,
        password
    })
    newUser.save()
    .then(user=>res.status(200).json(user))
    .catch(err=>res.status(400).json(err))

})

router.get('/user',(req,res)=>{
    UserModel.find()
    .then(users=>res.status(200).json(users))
    .catch(err=>res.status(400).json(err))
})

router.delete('/user/:id',(req,res)=>{
    UserModel.findByIdAndDelete(req.params.id)
    .then(user=>res.status(200).json(user))
    .catch(err=>res.status(400).json(err))
})

router.put('/user/:id',(req,res)=>{
    
    UserModel.findByIdAndUpdate(req.params.id,req.body)
    .then(user)
})

module.exports=router