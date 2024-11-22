import pool from '../config/db.js';
export async function deleteTask(req,res){
    try{
        const {id}=req.params;
        const result=await pool.query("delete from tasks where id=$1 RETURNING *",[id]);
        if(result.rows.length===0){
            return res.status(500).json({error:'did not found the task'});
        }else{
            res.json({message:'task deleted'});
        }
    }catch(error){
        console.error("error deleting the task",error);
        res.status(500).json({error:'error deleting the task'});
    }
}