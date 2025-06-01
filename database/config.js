const {Sequelize} = require("sequelize")
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



module.exports = sequelize






















// const info = {
//     name: "nikhil",
//     age: 20
// }

// const name = info.name
// const age = info.age


// const {name,age} = info