const route = require("express").Router()
const User = require("../model/model")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

route.post("/register", async (req, res)=>{

    const salt = await bcrypt.genSalt(10)
    const hasspassword = await bcrypt.hash(req.body.password, salt)

    const userdata = new User({
        name:req.body.name,
        email: req.body.email,
        password: hasspassword
    })
    try{
        const data = await userdata.save()
            res.send(data)
    }
    catch(err){
        console.log(err)
    }
})
route.post("/login", async (req, res)=>{
    const data = await User.findOne({name: req.body.name})
    const id = data._id
    console.log(id)
    const token = jwt.sign({id}, process.env.TOKEN_SECRET)
    res.header("auth-token", token).send(token)
    // res.send("User found with the " + {id})
})

module.exports = route