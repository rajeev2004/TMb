import { deleteTask, updateTask } from '../../controllers/taskManagement.js';

export default async function handler(req, res) {
  const { id } = req.query;  // Capture task ID from URL
  
  if (req.method === 'PUT') {
    // Directly call the updateTask controller
    await updateTask(req, res);
  } else if (req.method === 'DELETE') {
    // Directly call the deleteTask controller
    await deleteTask(req, res);
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
