const dbConfig = require("../config/db.config")
const userModel = require("./users.model")
const monthlyDepositModel = require("./monthly_deposit.model")
const donationModel = require("./donation.model")
const lendingModel = require("./lending.model")
const investmentModel = require("./investment.model")
const Sequelize = require("sequelize")


const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: dbConfig.DIALECT,
        define: dbConfig.DEFINE
    }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

userModel(sequelize);
monthlyDepositModel(sequelize);
donationModel(sequelize);
lendingModel(sequelize);
investmentModel(sequelize);

module.exports = db;



