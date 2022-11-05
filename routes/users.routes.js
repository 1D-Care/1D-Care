const express = require("express")
const userController = require('../controllers/users.controller')

module.exports = (app) => {
    const router = express.Router();

    router.get('/', userController.findAll);
    router.get('/:user_id', userController.findById);
    router.post('/',userController.create);
    router.post('/:user_id',userController.update);


    app.use('/users', router)
}