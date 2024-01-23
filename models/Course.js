const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  id:Number,
  name: String,
  instructor: String,
  description: String,
  enrollmentStatus: String,
  thumbnail: String,
  duration: String,
  schedule: String,
  location: String,
  prerequisites: [String],
  syllabus: [
    {
      week: Number,
      topic: String,
      content: String,
    },
  ],
  students: [
    {
      id: Number,
      name: String,
      email: String,
    },
  ],
});

module.exports = mongoose.model('Course', courseSchema);
