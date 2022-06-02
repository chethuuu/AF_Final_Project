const mongoose = require('mongoose')

const evaluationSchema = new mongoose.Schema({
    grp_id: {
        type: String,
        required: true,
        unique: true,
    },

    subject: {
        type: String,
        required: true,
    },

    assignment: {
        type: String,
        required: true,
    },

    date: {
        type: Date,
        required: true,
    },

    point1: {
        type: String,
        required: true,
    },

    point2: {
        type: String,
        required: true,
    },

    point3: {
        type: String,
        required: true,
    },

    marks1: {
        type: Int32Array,
        required: true,
    },

    marks2: {
        type: Int32Array,
        required: true,
    },

    marks3: {
        type: Int32Array,
        required: true,
    },

    feedback: {
        type: String,
        required: true,
    },

    marks1: {
        type: Int32Array,
        required: true,
    },
    
});

module.exports = mongoose.model('evaluations', evaluationSchema);