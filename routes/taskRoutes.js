const express = require('express');
const router = express.Router();

const { addTasks, getTasks, updateTasks, deleteTasks } = require('../controllers/taskController');

router.get('/',getTasks);
router.post('/',addTasks);
router.put('/:id',updateTasks);
router.delete('/:id',deleteTasks);

module.exports = router;



