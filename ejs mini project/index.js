const express = require("express");
const app = express();
const path = require("path");
let port = 3000;
// serving the static files 
app.use(express.static(path.join(__dirname,"/public")))
//view engine ku set kare ejs ku
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.get("/",((req,res)=>{
    res.render("index.ejs")

}));

app.get("/recipe/:recipe",((req,res)=>{
    let { recipe}= req.params;
    const recipedata= require("./recipe.json");
     const data = recipedata[recipe];
  if(data){
     res.render("recipe.ejs",{ data});
    console.log("the respponse send successfully")
  }else{
    res.render("error.ejs")
  }
}))
// app.get("/ig/:username",((req,res)=>{
//   let { username}= req.params;
//   const instadata = require("./data.json");
//   const data = instadata[username];
//   if(data){
//     res.render("insta.ejs",{ data});
//   }else{
//     res.render("error.ejs");
//   }
// }))


app.listen(port,()=>{
    console.log(`the app is listening in the port ${port}`);
})