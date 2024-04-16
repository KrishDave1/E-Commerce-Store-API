const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product name is required"],
  },
  price: {
    type: Number,
    required: [true, "Product Price must be provided"],
    },
    featured: {
        type: Boolean,
        default: false
    },
    rating: {
        type: Number,
        default: 4.5
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    company: {
        type: String,
        // enum: ["ikea", "liddy", "caressa", "marcos"], 1st way to use enum
        // enum is used to limit the choices of the company.It acts a selection box for backend.

        enum: {
            values: ["ikea", "liddy", "caressa", "marcos"],
            message: "{VALUE} is not supported",
        },
    }
});

module.exports = mongoose.model("Product", ProductSchema);
