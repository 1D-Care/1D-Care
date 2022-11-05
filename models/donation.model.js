const {DataTypes} = require("sequelize")

module.exports = (sequelize) => {
    const donations = sequelize.define("donations",{
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
        remarks : {
            type:DataTypes.STRING,
            allowNull: false    
        },
        date: {
            type:DataTypes.DATE,
            allowNull: false    
        },
    },{
        tableName: 'donations'
    })

    return donations

}
