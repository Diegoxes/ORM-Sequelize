const {User,Post}=require("../db")


//-------------------USUARIOS------------------
const createUser= async(req , resp)=>{
    try{
            const {name,email}=req.body;
            const newUser= await User.create({name,email})//create recibe un objeto

            resp.status(200).send(newUser);

    }catch(error){
        resp.status(400).json({error:error.message});
    }
}

const getAllUsers= async(req,resp)=>{
    try{
        const users= await User.findAll();
        resp.status(200).send(users)
    }catch(error){
        resp.status(400).json({error:error.message});
    }
}


const getUsersByPk= async (req,resp)=>{
    try{
        const {id}=req.params;
        const userByPk= await User.findByPk(id);
        resp.status(200).send(userByPk);
    }catch(error){
        resp.status(400).json({error:error.message});
    }
}

const updateUser = async (req, res) => {
    try {
        const { email, newEmail } = req.body;
        
        // Utiliza el método update de Sequelize para actualizar el usuario
        await User.update({ email: newEmail},{where:{email:email}});

        res.status(200).send("El usuario ha sido actualizado con éxito");
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}


const deleteUsers= async(req,res)=>{
    try{
        const{id}=req.params;
        await User.destroy({where:{id:id}})
        res.status(200).json("Delete realizado con exito ");          
    }catch(err){
        res.status(400).json({error:err.message})
    }
}


//------------------POST----------------------


const createPost= async(req , resp)=>{
    try{
            const {userId,title,body}=req.body;  // const { usuarioID,title,body}=req.boy el id se tiene que asociar 
            // al title y al body , el usuarioID es de la PrimaryKey de la tabla USER
            const newPost= await Post.create({title,body})//create recibe un objeto
            const resPost= await newPost.setUser(userId)  // se usa set+ el nombre del modelo
            resp.status(200).send(resPost);

    }catch(error){
        resp.status(400).json({error:error.message});
    }
}



module.exports={createUser , getAllUsers,getUsersByPk,updateUser,deleteUsers,createPost};