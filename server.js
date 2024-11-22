import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { connectDB } from './config/db.js'; 
import {
    getTasks, deleteTask, addTask, updateTask
} from './controllers/taskManagement.js';
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
connectDB();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.get('/api/tasks', getTasks);
app.post('/api/tasks', addTask);
app.put('/api/tasks/:id', updateTask);
app.delete('/api/tasks/:id', deleteTask);
app.use(express.static(path.join(__dirname, '../frontend/dist')));
app.get('*', (req, res) => {
    console.log(`Serving React app for route: ${req.url}`);
    res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'));
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
