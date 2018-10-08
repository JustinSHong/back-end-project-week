const mongoose = require("mongoose");

mongodb: module.exports = {
    connectTo: function() {
        return mongoose.connect(encodeURI(process.env.MONGODB_URI));
    }
};
