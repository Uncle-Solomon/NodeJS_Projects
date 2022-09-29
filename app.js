const connectDB = require("./db/connect");
const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
require('dotenv').config();

// middleware
app.use(express.static('./public'));
app.use(express.json());
// routes
// app.get('/hello', (req, res) => {
//     res.send("Task Mangager App");
// })

app.use('/api/v1/tasks', tasks)

// app.get('/api/v1/tasks')           - get all the tasks
// app.post('/api/v1/tasks')           - create a new t
// app.get('/api/v1/tasks/:id')           - get all the tasks
// app.patch('/api/v1/tasks/:id')           - get all the tasks
// app.delete('/api/v1/tasks/:id')           - get all the tasks


const port = 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`Server is listening at port ${port}...`));
    } catch (error) {
        console.log(error);
    }
}

start();

