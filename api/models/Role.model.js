const mongoose = require('mongoose');

const Role = new mongoose.Schema({
    name: {
        type: String,
    },
});

module.exports = mongoose.model('Role', Role);
