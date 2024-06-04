const express=require("express")
const fs=require("fs")
const path=require("path")
const app=express();
const port =80;
// serving static file
app.use('/static',  express.static('static'))
app.use(express.urlencoded())
//set the tamplate engine as pug
app.set('view engine','pug')
//set views directory
app.set('views',path.join(__dirname,'views'))
//endpoint
app.get('/',(req,res)=>{
    const a="this is title";
    const b="this is content";
    const c={"title":a,"content":b}
    res.status(200).render('index.pug',c);
})
app.post('/',(req,res)=>{
    console.log(req.body)
     let rec_1=req.body.rec_1
    console.log(rec_1);
    let outputowrite=`this is  ${req.rec_1} `
    fs.writeFileSync('data.txt',outputowrite);
    const a="your form has been submitted successfully";
    const c={"message":a}

    res.status(200).render('index.pug'); 
})
//start the server
app.listen(port,()=>{
    console.log(`the app has been initiated successfully ${port}`)
});