const db = require('../models/index')
const userModel = require('../models/users.model')
const users = userModel(db.sequelize)

exports.findById = (req, res) => {
    const { params } = req;
    const userId = params.user_id
    users.findByPk(userId).then((data) => {
        if (data) {
            res.send(data);
        } else {
            res.status(404).send({
                message: `User not found with id ${userId}`
            });
        }
    }).catch((error) => {
        res.status(500).send(error);
    })
};

exports.findAll = (req, res) => {
    users.findAll().then((data) => {
        if (data) {
            res.send(data);
        } else {
            res.status(404).send({
                message: `No users found`
            });
        }
    }).catch((error) => {
        res.status(500).send(error);
    })
};

exports.create = (req, res) => {
    const { body } = req;

    users.create(body).then((data) => {
        res.send(data);
    }).catch((error) => {
        res.status(500).send(error);
    });
};

exports.update = async (req, res) => {
    const { body, params } = req;
    
    users.update(body, {
        where: { id: params.user_id }
    }).then((data) => {
        res.send(data);
    }).catch((error) => {
        res.status(500).send(error);
    });
};
