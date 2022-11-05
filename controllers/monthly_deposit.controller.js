const db = require('../models/index')
const depositModel = require('../models/monthly_deposit.model')
const monthlyDeposit = depositModel(db.sequelize)

exports.createDeposit = async (req, res) => {
    const { body } = req;
    try {
        const result = await monthlyDeposit.create(body); 
        res.send(result)  
    } catch (error) {
        res.status(500).send(error);
  }
}

exports.totalDeposit = async (req, res) => {
    try {
        const clause = {
            attributes: [
            [db.sequelize.fn('sum', db.sequelize.col('amount')), 'total_amount']
            ],
            raw: true
        }
        const result = await monthlyDeposit.findAll(clause)
        const response = {
            total_amount: result[0].total_amount 
        }
        res.send(response);

    } catch (error) {
        res.status(500).send(error); 
    }
}

exports.bulkDeposit = async (req, res) => {
    try {
        const { body } = req;
        if (body?.user_ids && body.user_ids.length) {
            const payload = [];
            for (let i = 0; i < body.user_ids.length; ++i) {
                payload.push({
                    user_id: body.user_ids[i],
                    amount: body.amount,
                    deposit_date: body.deposit_date
                })
            }
            const results = await monthlyDeposit.bulkCreate(payload);
            res.send(results) 
        } else {
            const msg = {
                message: "user_ids required"
            }
            res.status(404).send(msg) 
        }
    } catch (error) {
        res.status(500).send(error); 
    }
}