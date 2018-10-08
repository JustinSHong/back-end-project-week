const mongoose = require("mongoose");
const user = process.env.DB_user;
const password = process.env.DB_password;
const host = process.env.DB_host;
const dbName = process.env.DB_name;

mongodb: module.exports = {
    connectTo: function() {
        return mongoose.connect(
            encodeURI(
                `mongodb://${user}:${password}@ds139970.mlab.com:${host}/${dbName}`
            )
        );
    }
};
