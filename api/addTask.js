import pool from '../config/db.js';
export async function addTask(req,res){
    try{
        const {title,description,due_date}=req.body;
        const creationDate=new Date();
        const result=await pool.query("INSERT INTO tasks (title,description,due_date,created_at) values ($1,$2,$3,$4) RETURNING *",[title,description,due_date,creationDate]);
        res.status(201).json(result.rows[0]);
    }catch(error){
        console.error("error adding the data",error);
        res.status(500).json({message:'error adding the task'});
    }
}