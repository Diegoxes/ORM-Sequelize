const { DataTypes } = require('sequelize');


module.exports =(sequelize)=>sequelize.define("User", {

    id:{
        type:DataTypes.UUID ,  //identificador con numeros y letras separados por guion
        primaryKey:true,
        defaultValue:DataTypes.UUIDV4
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,


    }


} ,{timestamps:false , freezeTableName:true})
