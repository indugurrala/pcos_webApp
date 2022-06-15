const exp=require("express")
const dateapp=exp.Router();
const expressAsyncHandler=require('express-async-handler')


dateapp.use(exp.json())

dateapp.get('/getdate',expressAsyncHandler(async(request,response)=>{
    let dateCollectionObj=request.app.get("dateCollectionObj")
    let result=dateCollectionObj.find().toArray();
    response.send(result);
}))


module.exports=dateapp
