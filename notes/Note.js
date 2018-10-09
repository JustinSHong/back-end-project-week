const mongoose = require("mongoose");

const options = {
    timestamp: true,
    strict: false
};

const Note = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        isComplete: {
            type: Boolean,
            required: true
        },
        id: {
            type: String,
            required: true
        },
        archive: {
            type: Boolean,
            required: true
        }
    },
    options
);

module.exports = mongoose.model("Note", Note);
