const db = require('../models/index')
const lendingModel = require('../models/lending.model')
const lending = lendingModel(db.sequelize)

exports.createLoan = async (req, res) => {
    try {
        const { body, params } = req;
        if (params.user_id){
            body.user_id = params.user_id
            const result = await lending.create(body)
            res.send(result)
        } else {
            const msg = {
                message: "user_id required"
            }
            res.status(404).send(msg)
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.getAllLendingDetails = async (req, res) => {
    try {
        const results = await lending.findAll()
        res.send(results)
    } catch (error) {
        res.status(500).send(error)        
    }
}

exports.getLoanByUser = async (req, res) => {
    try {
        const { params } = req;
        if (params.user_id){
            const result = await lending.findAll({
                where: { user_id: params.user_id }  
            }
            )
            res.send(result)
        } else {
            const msg = {
                message: "user_id required"
            }
            res.status(404).send(msg)
        }
    } catch (error) {
        res.status(500).send(error)        
    }
}