const express = require("express")
const monthlyController = require('../controllers/monthly_deposit.controller')

module.exports = (app) => {
    const router = express.Router();

    router.get('/', monthlyController.totalDeposit);
    router.post('/', monthlyController.createDeposit);
    router.post('/bulk', monthlyController.bulkDeposit);


    app.use('/monthlyDeposit', router)
}