const exp=require('express')
const mc=require('mongodb').MongoClient;
const app=exp();
app.use(exp.json())

const path=require('path')
app.use(exp.static(path.join(__dirname,'./build')))

const dburl="mongodb+srv://Varun:Varun@cluster0.klf74.mongodb.net/?retryWrites=true&w=majority"
let collectionObj;

mc.connect(dburl,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(client=>{
    let examplecollectionobj=client.db("sample").collection("examplecollection");
    app.set("examplecollectionobj",examplecollectionobj);
    let detailcollectionObj=client.db("sample").collection("profilecollection");
    app.set("detailCollectionObj",detailcollectionObj);

    console.log("DB connection succesful ");
})
.catch(err=>console.log("Err in db connection",err));


const userapp=require("./src/api/userapi")
const detailapp=require('./src/api/detailapi')
app.use('/detailapi',detailapp);
app.use("/userapp",userapp);

app.use('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'./build/index.html'));
})

app.use((req,res,next)=>{
    res.send({message:`path ${req.url} is invalid`});
});



app.listen(4000,()=>{
    console.log("server listening on port 4000")
});