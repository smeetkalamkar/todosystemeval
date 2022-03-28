const express = require('express');
const connect = require("./configs/db");
const userController = require("./controllers/user.controller")

//const todosController = require("./controllers/todos.controller")

const {register,login} = require("./controllers/auth.controller")

const app = express();

app.use(express.json());

app.use("/users",userController);
app.post("/register",register);
app.post("/login",login)


app.listen(5007,async () =>{
    try{
        await connect();
      console.log("listening on port 5007")
    }
    catch(err){
       console.log(err.message)
    }
})