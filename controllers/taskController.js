const Task = require('../models/Task');

const addTasks = async (req, res) => {
    try {
        const task = new Task(req.body);
        const newTask = await task.save();
        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getTasks = async (req, res) => {
    try {
        const a = await Task.find();
        res.status(200).json(a);
    } catch (error) {
        res.status(500).json("error")
    
    }
}
const updateTasks = async (req, res) => {
    try {
        const updatedTasks = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedTasks);
    } catch (error) {
        res.status(500).json("error");
    }
}
const deleteTasks = async(req,res)=>{
    try{
        await Task.findByIdAndDelete(req.params.id);
        res.status(200).json("Deleted Successfully");
    }catch(error){
        res.status(500).json("error");
    }   
}
module.exports = { addTasks, getTasks, updateTasks, deleteTasks };
