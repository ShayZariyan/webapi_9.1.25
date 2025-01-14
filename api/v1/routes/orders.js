const express=require('express');
const Orderrouter=express.Router();
const{getAll,getByID,addNew,Update,Delete}=require('../controllers/Orders');
Orderrouter.get('/',getAll);
Orderrouter.get('/:id',getByID);
Orderrouter.post('/',addNew);
Orderrouter.put('/:id',Update);
Orderrouter.delete('/:id',Delete);
module.exports=Orderrouter;