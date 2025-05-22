
// const express= require("express");
// const app = express();
// //path package ku require karre taake ham hamare ejs server ku kaheen se bhi run kar sake ,,isliye ke ejs ke files render ho sake
// const path = require("path");

// let port = 8080;

// // setting ejs view engine
// app.set("view engine","ejs");
// //yahah pe ham path ku set karre 
// app.set("views",path.join(__dirname,"/views"));

// app.get("/home",((req,res)=>{
//     res.render("home.ejs")
//     console.log("render alhamdulilah ")
// }))

// app.get("/",((req,res)=>{
//     res.send("this is slash page ");
// }))


// app.get("/rolldice",((req,res)=>{
//     let dicevalue = Math.floor(Math.random() * 6 )+1;
//     // passing the data into ejs 
//     res.render("rolldice.ejs",{dicevalue});
//     console.log(`the dice value is ${ dicevalue}`)
// }))
// // instagrm ejs 
// app.get("/ig:/username",((req,res)=>{
//     let {username}=req.params.username;
//     res.send(`the user name is @${username}`)
// }));

// // server listening the req
// app.listen(port,()=>{
//     console.log(`the app is listening in the port : ${port}`);
    
// })

const express = require("express");
const app= express();
const path = require("path");
const port= 8080;
//making public folder for using static files
app.use(express.static(path.join(__dirname,"/public")))
//view engine ku set kare ejs ku
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.get("/",((req,res)=>{
    res.send("this is a home page ");

}))
app.get("/ig/:username",((req,res)=>{
  let { username}= req.params;
  const instadata = require("./data.json");
  const data = instadata[username];
  if(data){
    res.render("insta.ejs",{ data});
  }else{
    res.render("error.ejs");
  }
}))

app.get("/rolldice",((req,res)=>{
    let dicevalue = Math.floor(Math.random() * 6 )+1;
    // passing the data into ejs 
    res.render("rolldice.ejs",{dicevalue});
    console.log(`the dice value is ${ dicevalue}`)
}))
// insta list using loop in ejs

app.listen(port,()=>{
    console.log(`the app is listening in the port ${port}`);
})












































// app.get("/",((req,res)=>{
//     res.send("<h1> this is home page </h1")
// }))
// app.get("/server",((req,res)=>{
//     res.send("this is the server side page");
// }))