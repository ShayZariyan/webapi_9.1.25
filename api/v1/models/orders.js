const mongoose=require('mongoose');
const OrdersSchema=mongoose.Schema({
_id:mongoose.Schema.Types.ObjectId,
Oid:Number,
Oname:String,
Odesc:String,

});
const OrdersModel = mongoose.model('Categories', OrdersSchema,'categories');



module.exports = OrdersModel;