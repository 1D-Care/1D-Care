const {DataTypes} = require("sequelize")

module.exports = (sequelize) => {
    const lendings = sequelize.define("lendings",{
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            unique: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        amount: {
            type:DataTypes.FLOAT,
            allowNull: false
        },
        fine: {
            type:DataTypes.FLOAT,
            allowNull: true
        },
        lending_date: {
            type:DataTypes.DATE,
            allowNull: false    
        },
        status: {
            type:DataTypes.STRING,
            allowNull: true    
        },
        return_date: {
            type:DataTypes.DATE,
            allowNull: true    
        },
    },
    {
        tableName: 'lendings'
    })

    return lendings
}
