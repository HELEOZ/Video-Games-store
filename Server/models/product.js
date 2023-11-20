const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true,"Porfavor ingrese un producto"]
        },
        quantity: {
            type: Number,
            required: true,
            default: 0
        },
        price: {
            type: Number,
            required: true,
        },
        image: {
            type: String,
            requiered: false,
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('product', productSchema);