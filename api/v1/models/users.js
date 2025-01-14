const mongoose=require('mongoose');
const UsersSchema=mongoose.Schema({
_id:mongoose.Schema.Types.ObjectId,
Uid:Number,
Uname:String,
Upicname:String,
Udesc:String,
Upass:String

});
const UsersModel = mongoose.model('Users', UsersSchema,'users');



module.exports = UsersModel;