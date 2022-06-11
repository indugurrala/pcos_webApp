const exp=require("express")
const userapp=exp.Router();
const expressAsyncHandler=require('express-async-handler')
const bcryptjs=require('bcryptjs');
const jwt=require('jsonwebtoken')

userapp.use(exp.json())

userapp.post("/createuser",expressAsyncHandler(async(request,response)=>{
    let examplecollectionobj=request.app.get("examplecollectionobj");
    let newuser=request.body;
    console.log("newuser is ",newuser);
    let userofDB= await examplecollectionobj.findOne({
        name:newuser.name,
    });
    if(userofDB!==null){
        response.send({
            message:"user with name already exists",
        })
    }
    else{
        let hashedpassword=await bcryptjs.hash(newuser.password,6);
        newuser.password=hashedpassword;
        await examplecollectionobj.insertOne(newuser);
        response.send({message:"new user created"})
    }
}))

userapp.post(
    '/login',
    expressAsyncHandler(async(req,res)=>{
        let examplecollectionobj=req.app.get("examplecollectionobj");
        let userCredentials=req.body;
        let userlogin=await examplecollectionobj.findOne({
            name:userCredentials.name,
        })
        if(userlogin!==null){
            let status=await bcryptjs.compare(userCredentials.password,userlogin.password);
            if(!status){
                res.send({message:"Invalid password"});
            }
            else{
                let token=jwt.sign({name:userlogin.name},'abcddd',{expiresIn:60});
                res.send({message:"success",payload:token,userObj:userlogin});
            }
        }
        else{
            res.send({message:"invalid user"});
        }
}))

module.exports=userapp;