const express = require("express")
const lendingController = require('../controllers/lending.controller')

module.exports = (app) => {
    const router = express.Router();
    router.post('/:user_id', lendingController.createLoan);
    router.get('/', lendingController.getAllLendingDetails);
    router.get('/:user_id', lendingController.getLoanByUser);
    app.use('/lending', router)
}