const mongoose = require('mongoose')

const evaluationSchema = new mongoose.Schema({
    group_id: {
        type: String,
        required: true,
        trim: true
    },

    details: {
        subject: {type: String, required: true},
        assignment: {type: String, required: true},
        date: {type: String, required: true},
        point: {type: String, required: true},
        point1: {type: String, required: true},
        point2: {type: String, required: true},
        point3: {type: String, required: true},
        marks: {type: String, required: true},
        marks1: {type: String, required: true},
        marks2: {type: String, required: true},
        marks3: {type: String, required: true},
    },
    amount: {
        type: String,
        required: true,
        trim: true
    },
    amount1: {
        type: String,
        required: true,
        trim: true
    },
    amount2: {
        type: String,
        required: true,
        trim: true
    },
    amount3: {
        type: String,
        required: true,
        trim: true
    },
    total: {
        type: String,
        required: true,
        trim: true
    },
    feedback: {
        type: String,
        required: true,
        trim: true
    },
    

});

module.exports = mongoose.model('doc_evaluations', evaluationSchema);