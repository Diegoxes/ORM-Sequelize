const express= require("express");
const morgan=require("morgan")
const server=express();
const cors = require('cors');
const {sequelize}=require("./src/db");
const { createUser, getAllUsers, getUsersByPk, updateUser, deleteUsers, createPost } = require("./src/handlers");

server.use(cors());
server.listen(3001,()=>{


    sequelize.sync({force:false})  //force Elimina y recrea de nuevo la tabla
    console.log("todo bien en el puerto 3001")
})
server.use(express.json());
server.use(morgan("dev"));


server.post("/user/create",createUser);
server.get("/users",getAllUsers);
server.get("/users/:id",getUsersByPk);
server.put("/users",updateUser);
server.delete("/users/:id",deleteUsers)

//----------------RUTAS PARA POST---------------------
server.post("/post/create",createPost) 

module.exports= server;