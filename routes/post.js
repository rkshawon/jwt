const route = require("express").Router()
const verify = require("./verify")

route.get("/", verify, (req, res)=>{
    res.json({
        posts:{
            title: "post",
            des: 'des'
        }
    })
})
module.exports = route