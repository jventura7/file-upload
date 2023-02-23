const Product = require('../models/Product')
const { StatusCodes } = require('http-status-codes')

const createProduct = async (req, res, next) => {
    console.log(req.body)
    const product = await Product.create(req.body)
    res.status(StatusCodes.CREATED).json({ product })
}

const getAllProducts = async (req, res, next) => {
    const products = await Product.find({})
    res.status(StatusCodes.OK).json({ products })
}

const deleteProduct = async (req, res, next) => {
    res.send('delete product')
}   

module.exports = {
    createProduct,
    getAllProducts,
    deleteProduct
}