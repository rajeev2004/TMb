import pool from '../config/db.js';
export async function updateTask(req,res){
    try{
        const {id}=req.params;
        const {title,description,due_date}=req.body;
        const result=await pool.query("update tasks set title=$1, description=$2, due_date=$3 where id=$4 RETURNING *",[title,description,due_date,id]);
        if(result.rows.length===0){
            res.status(500).json({error:'task not found'});
        }
        res.json(result.rows[0]);
    }catch(error){
        console.error("task not found:",error);
        res.status(500).json({error:'task not found'});
    }
}