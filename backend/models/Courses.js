const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true
    },
    credit: {
        type: Number,
        required: true
    },
    gpa: {
        type: String,
        required: true
    },
});

module.exports = Course = mongoose.model('course', CourseSchema);