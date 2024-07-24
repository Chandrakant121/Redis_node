const mongoose = require('mongoose')

const connect = () => {
    return mongoose.connect("mongodb+srv://abc12:abc12@cluster0.bjtpv.mongodb.net/")
}

module.exports = connect