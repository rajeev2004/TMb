import pool from '../config/db.js';

export default async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM tasks');
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error getting tasks', error);
    res.status(500).json({ error: 'Error getting tasks' });
  }
};
