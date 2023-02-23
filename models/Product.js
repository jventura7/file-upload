const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please prodvide a product name']
    },
    price: {
        type: Number,
        required: [true, 'Please provide a price']
    },
    image: {
        type: String,
        required: [true, 'Please provide an image']
    }
})

module.exports = mongoose.model('Product', ProductSchema)