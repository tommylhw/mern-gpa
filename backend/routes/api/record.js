const express = require('express');
const router = express.Router();

// Load Courses model
const Course = require('../../models/Courses');

// @route GET api/courses/test
// @description tests courses route
// @access Public
router.get('/test', (req, res) => res.send('courses route testing!'));

// @route GET api/courses 
// @description Get all courses
// @access Public
router.get('/', (req, res) => {
  Course.find()
    .then(courses => res.json(courses))
    .catch(err => res.status(404).json({ nocoursesfound: 'No courses found' }));
});

// @route GET api/courses/:id
// @description Get single course by id
// @access Public
router.get('/:id', (req, res) => {
  Course.findById(req.params.id)
    .then(course => res.json(course))
    .catch(err => res.status(404).json({ nocoursefound: 'No course found' }));
});

// @route GET api/courses
// @description add/save course
// @access Public
router.post('/', (req, res) => {
  Course.create(req.body)
    .then(course => res.json({ msg: 'Course added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this course' }));
});

// @route GET api/courses/:id
// @description Update course
// @access Public
router.put('/:id', (req, res) => {
  Course.findByIdAndUpdate(req.params.id, req.body)
    .then(course => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/courses/:id
// @description Delete course by id
// @access Public
router.delete('/:id', (req, res) => {
  Course.findByIdAndRemove(req.params.id, req.body)
    .then(course => res.json({ mgs: 'Course entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a course' }));
});

module.exports = router;