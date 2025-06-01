const {Sequelize, DataTypes} = require("sequelize")
// const {sequelize} = require("sequelize").Sequelize
require("dotenv").config() //yo garepaxi only hami dotenv ko data haru yo file ma access garna milxa

//making object from sequelize class
const sequelize = new Sequelize({
    database: process.env.database_name,
    username: process.env.database_username ,
    password: process.env.database_password,
    port: process.env.database_port,
    host: process.env.database_host,
    dialect:"mysql"
}) 

sequelize.authenticate().then(()=>{
    console.log("database connected successfully")    
}).catch((err)=>{
    console.log("Error occur",err)
})


const db = {}
db.blogs = require("./../models/blogmodel")(sequelize,DataTypes)
db.users = require("./../models/userModel")(sequelize,DataTypes)
db.products = require("./../models/productModel")(sequelize,DataTypes)

sequelize.sync({ alter : false}).then(()=>{
    console.log("Migrated successfully")
})  //migration code

module.exports = sequelize






















// const info = {
//     name: "nikhil",
//     age: 20
// }

// const name = info.name
// const age = info.age


// const {name,age} = info