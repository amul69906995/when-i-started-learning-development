const express=require("express")
const path=require("path")
const app=express();
const port =80;
// serving static file
app.use('/static',  express.static('static'))
//set the tamplate engine as pug
app.set('view engine','pug')
//set views directory
app.set('views',path.join(__dirname,'views'))

app.get('/demo', (req, res) => {
    res.status(200).render('demo', { title: 'hi', message: 'Hello there deldmdk!' })
  })
app.get("/",(req,res)=>{
    res.send("this is my first express app.")
});

app.get("/about",(req,res)=>{
    res.send("this is my about page on express app.")
});
app.post("/a",(req,res)=>{
    res.status(404).send(" not found.")
});
app.listen(port,()=>{
    console.log(`the app has been initiated successfully ${port}`)
}); 