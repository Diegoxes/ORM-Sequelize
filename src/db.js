require("dotenv").config();
const {Sequelize}=require("sequelize");
const { DB_USERNAME, DB_NAME, DB_PASSWORD } = process.env;

const UsersModel=require("./models/usersModel")
const PostModel=require("./models/postModel")

const sequelize = new Sequelize(
    `postgres://${DB_USERNAME}:${DB_PASSWORD}@localhost:5432/${DB_NAME}`,{logging:false}); //loggin desabilitado los registros 


UsersModel(sequelize);
PostModel(sequelize);
//relaciones y asociaciones
const {User,Post}=sequelize.models;

User.hasMany(Post);
Post.belongsTo(User);


module.exports = {
    sequelize,
    User,Post
};
