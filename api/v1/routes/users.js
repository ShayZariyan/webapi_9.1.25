const express=require('express');
const Usersrouter=express.Router();
const{getAll,getByID,addNew,Update,Delete}=require('../controllers/users');
Usersrouter.get('/',getAll);
Usersrouter.get('/:id',getByID);
Usersrouter.post('/',addNew);
Usersrouter.put('/:id',Update);
Usersrouter.delete('/:id',Delete);
module.exports=Usersrouter;