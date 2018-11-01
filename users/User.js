const mongoose = require("mongoose");

const options = {
    timestamp: true,
    strict: false
};

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required: true
        },
        auth: {
            type: String,
            enum: ["email", "google", "twitter", "facebook"],
            default: "email"
        },
        notes: [{ type: ObjectId, ref: "Note", autopopulate: true }]
    },
    options
);

module.exports = mongoose.model("User", userSchema);
