const model = require('../models');
const asyncHandler = require('express-async-handler');

exports.getAllUser = asyncHandler(async (req, res) => {
    const user = await model.User.findAll({});
    res.status(200).json({
        status: 200,
        message: 'Success to get all user',
        data: user
    });
});

exports.getUser = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const user = await model.User.findAll({
        where: { id: id }
    });
    if (!id) {
        res.status(404).json({
            status: 404,
            message: 'User not found'
        })
    } else {
        res.status(200).json({
            status: 200,
            message: 'Success get user',
            data: user
        })
    }

});

exports.createUser = asyncHandler(async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    const user = await model.User.create({
        firstName,
        lastName,
        email,
        password
    });
    res.status(201).json({
        status: 201,
        message: 'Success to create user',
        data: user
    });
});

exports.updateUser = asyncHandler(async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    const id = req.params.id;
    const user = await model.User.update({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    }, {
        where: { id: id }
    });

    if (!id) {
        res.status(404).json({
            status: 404,
            message: 'User not found'
        })
    } else {
        res.status(201).json({
            message: 'Success update user',
            data: user
        });
    }

});

exports.deleteUser = asyncHandler(async (req, res) => {
    const id = req.params.id;
    await model.User.destroy({
        where: { id: id }
    });

    if (!id) {
        res.status(404).json({
            status: 404,
            message: 'User not found'
        })
    }
    res.status(200).json({
        status: 200,
        message: 'Success delete user',
    })
});
