const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const LoginSchema = new Schema(


{
    username:{ type: String, required: true },
    password:{ type: String, required: true },
}
)
const collection1 = mongoose.model('Collection',LoginSchema)
module.exports = collection1