// api/tasks.js

import { getTasks } from '../../controllers/taskManagement.js';
import { addTask } from '../../controllers/taskManagement.js';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    await getTasks(req, res);  // Handles GET request to fetch tasks
  } else if (req.method === 'POST') {
    await addTask(req, res);  // Handles POST request to add a new task
  } else {
    res.status(405).json({ error: 'Method Not Allowed' }); // Handle unsupported methods
  }
}
