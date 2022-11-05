const {DataTypes} = require("sequelize")

module.exports = (sequelize) => {
    const monthlyDeposits = sequelize.define("monthly_deposits",{
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
            defaultValue: 0.0,
            allowNull: true
        },
        deposit_date: {
            type:DataTypes.DATE,
            allowNull: true    
        },
        transaction_id: {
            type:DataTypes.STRING,
            allowNull: true    
        },
        remarks: {
            type:DataTypes.STRING,
            allowNull: true    
        }
    },
    {
        tableName: 'monthly_deposits'
    }
    )

    return monthlyDeposits
}
