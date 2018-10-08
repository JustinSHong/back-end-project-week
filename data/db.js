require("dotenv").config();
const mongoose = require("mongoose");
const mongoURL = process.env.MONGODB_URI;

mongodb: module.exports = {
    connectTo: function() {
        return mongoose.connect(
            encodeURI(mongoURL),
            { native_parser: true }
        );
    }
};
