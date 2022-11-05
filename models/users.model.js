const {DataTypes} = require("sequelize")



module.exports = (sequelize) => {
    const users = sequelize.define("users",{
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            unique: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone_no: {
            type:DataTypes.STRING,
            allowNull: true
        },
        upi_id: {
            type:DataTypes.STRING,
            allowNull: true
        },
        email: {
            type:DataTypes.STRING,
            allowNull: true
    
        }
    })

    return users
}
