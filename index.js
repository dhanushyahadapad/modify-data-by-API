const express = require('express');
const connectDB = require('./config/db');
const cores =require('cors');
const taskRoutes = require('./routes/taskRoutes');
const app = express();

app.use(express.json());
app.use(cores());
connectDB();

app.use('/api/task', taskRoutes);




app.listen(3000, () => {
    console.log('Server is running on port 3000');
}); 