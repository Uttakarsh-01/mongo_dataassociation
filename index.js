const express = require('express');
const app = express();
const userModel = require("./models/user");
const postModel = require("./models/post");
 
app.get("/",(req,res)=>{
    res.send("hey");
})

app.get("/create",async(req,res) => {
    let user = await userModel.create({
        username:"uttakarsh",
        age:25,
        email:"uttakarsh@gmail.com"
    });

    res.send(user);
})

app.get("/post/create",async(req,res) => {
    postModel.create()
   let post = await postModel.create({
    postdata: "hello everyone",
    user:"5515dtb5df5gdr2g5dfr12v5dr"
   })

   let user = await userModel.findOne({_id:"68rs4g68rsg5rsg5rs4g"});
   user.posts.push(post._id);
  await user.save();

   res.send(post); 
})


app.listen(3000);