const pool= require('../../db');

const getuserdata = async(req,res) => {
      await pool.query("SELECT * FROM userdata", (error,results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
      })
};

const updateuserdata = async(req,res) => {
  const user_id=parseInt (req.params.user_id);
  const {first_name} = req.body;
  pool.query("UPDATE userdata SET first_name = $1 WHERE user_id=$2",[first_name, user_id],(error,results) =>{
    if (error) throw error;
    res.status(200).send("updated");
  })
}

const adduserdata = async(req,res) => {
  const {first_name,last_name,user_id,phone} = req.body;
  pool.query("INSERT INTO userdata (first_name, last_name, user_id,phone) values($1,$2,$3,$4)", [first_name, last_name, user_id, phone], (error,results) =>{
    if (error) throw error;
    res.status(201).send("added");
  })
};

const removeuserdata = async(req,res) => {
  const user_id=parseInt(req.params.user_id);
  pool.query(" DELETE FROM userdata WHERE user_id = $1", [user_id], (error,results) =>{
    if (error) throw error;
    res.status(201).send("deleted");
  })
};

module.exports = {
    getuserdata,
    updateuserdata,
    adduserdata,
    removeuserdata,
};