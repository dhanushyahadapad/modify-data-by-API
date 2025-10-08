const express = require('express');
const router = express.Router();

const { addTasks, getTasks, updateTasks, deleteTasks } = require('../controllers/taskController');

router.get('/tasks',getTasks);
router.post('/tasks',addTasks);
router.put('/tasks/:id',updateTasks);
router.delete('/tasks/:id',deleteTasks);

module.exports = router;



