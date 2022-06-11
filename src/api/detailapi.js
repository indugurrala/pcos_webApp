const exp=require("express")
const detailapp=exp.Router();
const expressAsyncHandler=require('express-async-handler')


detailapp.use(exp.json())

detailapp.get('/verify/:name',expressAsyncHandler(async(request,response)=>{
    let detailCollectionObj=request.app.get("detailCollectionObj");
    //let data=request.body
    let uname=request.params.name
    let result=await detailCollectionObj.findOne({name:uname});
    //response.send(result)
    if(result==null){
        response.send({message:"data not present"})
    }
    else{
        response.send({message:"data present"})
    }
}))

detailapp.get('/getdetails/:name',expressAsyncHandler(async(request,response)=>{
    let detailCollectionObj=request.app.get("detailCollectionObj");
    let uname=request.params.name
    let result=await detailCollectionObj.findOne({name:uname})
    
    console.log(result)
    if(result==null){
        response.send({message:"no data"})   
    }
    else{
        response.send({message:"data present",payload:result})
    }
}))



detailapp.post('/createdetails',expressAsyncHandler(async(request,response)=>{
    let detailCollectionObj=request.app.get("detailCollectionObj");
    let userdetail=request.body
    let result=await detailCollectionObj.insertOne(userdetail)
    response.send(result);

}))

detailapp.put('/update',expressAsyncHandler(async(request,response)=>{
    let detailCollectionObj=request.app.get("detailCollectionObj");
    let userdetails=request.body;
    let result=detailCollectionObj.updateOne({name:userdetails.name},[{$set:{name:userdetails.name,occupation:userdetails.occupation,working:userdetails.working,sleeping:userdetails.sleeping}}])
    if(result!==null){
        response.send({message:"Details updated successfully"})
    }
    else{
        response.send({message:"Details not updated"})
    }
}))
module.exports=detailapp;