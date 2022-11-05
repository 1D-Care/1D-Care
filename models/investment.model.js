const {DataTypes} = require("sequelize")

module.exports = (sequelize) => {
    const investments = sequelize.define("investments",{
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            unique: true
        },
        amount: {
            type:DataTypes.FLOAT,
            allowNull: false
        },
        platform: {
            type:DataTypes.FLOAT,
            allowNull: false
        },
        deposit_date: {
            type:DataTypes.FLOAT,
            allowNull: false    
        },
        profit_loss : {
            type:DataTypes.STRING,
            allowNull: true    
        },
        return_date: {
            type:DataTypes.DATE,
            allowNull: true    
        },
    },
    {
        tableName: 'investments'
    })

    return investments
}
