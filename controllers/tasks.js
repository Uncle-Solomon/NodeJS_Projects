const getAllTasks = (req, res) => {
    res.send('All Items are listed here');
}

const createTask = (req, res) => {
    res.send('Create Task');
}

const getTask = (req, res) => {
    res.send('Get single Task');
}
const updateTask = (req, res) => {
    res.send('update Task');
}
const deleteTask = (req, res) => {
    res.send('delete Task');
}


module.exports = {
    getAllTasks, createTask, getTask, updateTask, deleteTask,
}