const model = require('../models');
const asyncHandler = require('express-async-handler');

exports.getAllTag = asyncHandler(async (req, res) => {
    const tag = await model.Tag.findAll({});
    res.status(200).json({
        status: 200,
        message: 'Success to get all tag',
        data: tag
    });
});

exports.getTag = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const tag = await model.Tag.findAll({
        where: { id: id }
    });
    if (!id) {
        res.status(404).json({
            status: 404,
            message: 'Tag not found'
        })
    } else {
        res.status(200).json({
            status: 200,
            message: 'Success get tag',
            data: tag
        })
    }

});

exports.createTag = asyncHandler(async (req, res) => {
    const { name } = req.body;
    const tag = await model.Tag.create({
        name,
    });
    res.status(200).json({
        status: 200,
        message: 'Success to create tag',
        data: tag
    });
});

exports.updateTag = asyncHandler(async (req, res) => {
    const { name } = req.body;
    const id = req.params.id;
    const tag = await model.Tag.update({
        name: name,
    }, {
        where: { id: id }
    });

    if (!id) {
        res.status(404).json({
            status: 404,
            message: 'Tag not found'
        })
    } else {
        res.status(201).json({
            message: 'Success update tag',
            data: tag
        });
    }
});

exports.deleteTag = asyncHandler(async (req, res) => {
    const id = req.params.id;
    await model.Tag.destroy({
        where: { id: id }
    });

    if (!id) {
        res.status(404).json({
            status: 404,
            message: 'Tag not found'
        })
    }
    res.status(200).json({
        status: 200,
        message: 'Success delete tag',
    })
});
