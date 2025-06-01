
const makeBlogTable = (sequelize, DataTypes) =>{
    // .define() == table banaidine vayo
    const Blog = sequelize.define("blog", {
        title : {
            type : DataTypes.STRING
        },
        description : {
            type : DataTypes.STRING
        },
        subtitle : {
            type : DataTypes.STRING
        }
    })
    return Blog
}


module.exports = makeBlogTable