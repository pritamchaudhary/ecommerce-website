const express = require('express');
const path = require('path');
require('./db/conn');
const bodyParser = require('body-parser');
const User = require("./models/usermessage");

const app = express();

const port = process.env.PORT || 3000;

//setting the path
const staticPath = path.join(__dirname, "../public");

//middleware
// app.use(express.urlencoded({extended:false}));
app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(express.static(staticPath));


//routing

app.post("/contact",async(req,res) =>{
    try {
        // res.send(req.body);
        // console.log(req.body);
        const data =await User.create(req.body);
        console.log(data);
        res.redirect("/");
       
    } catch (error) {
        res.status(500).send(error);
        res.redirect("/");
    }
});

// for newsletter
app.post("/", async(req,res)=>{
    try {
        // res.send(req.body);
        // console.log(req.body);
        const data =await User.create(req.body);
        console.log(data);
        res.redirect("/");
       
    } catch (error) {
        res.status(500).send(error);
        res.redirect("/");
    }
});

// for newsletter
app.post("/about", async(req,res)=>{
    try {
        // res.send(req.body);
        // console.log(req.body);
        const data =await User.create(req.body);
        console.log(data);
        res.redirect("/");
       
    } catch (error) {
        res.status(500).send(error);
        res.redirect("/");
    }
});

// for newsletter
app.post("/blog", async(req,res)=>{
    try {
        // res.send(req.body);
        // console.log(req.body);
        const data =await User.create(req.body);
        console.log(data);
        res.redirect("/");
       
    } catch (error) {
        res.status(500).send(error);
        res.redirect("/");
    }
});

// for newsletter
app.post("/shop", async(req,res)=>{
    try {
        // res.send(req.body);
        // console.log(req.body);
        const data =await User.create(req.body);
        console.log(data);
        res.redirect("/");
       
    } catch (error) {
        res.status(500).send(error);
        res.redirect("/");
    }
});


// login or signup

app.post("/login_signup", async(req,res)=>{
    try {
        // res.send(req.body);
        // console.log(req.body);
        const data =await User.create(req.body);
        console.log(data);
        res.redirect("/");
       
    } catch (error) {
        res.status(500).send(error);
        res.redirect("/");
    }
});



//server create
app.listen(port, () => {
    console.log(`server is running at port no. ${port}`);
})