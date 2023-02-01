const express=require("express")
const port=5555
const cors =require('cors')
const app=express()
app.use(express.json())
app.use(cors())
// function add(x,y){
    app.get("/nagga",(req,res)=>{
        // console.log(req.body)
        // if(req.body.cheek===true){
        //     res.send("hello wassim")
        // }else{
        //     res.send('haythem mrayedh')
        // }
        res.send("heelllo")
        
    })
// }
// console.log(add(5,7))
app.listen(4000,()=>{
    console.log("server is samir")
})