const mongoose=require('mongoose');
const users=require('../models/userss');
const UsersModel = require('../models/userss');

module.exports = {

    getAll: (req, res) => {
        UsersModel.find()
            .then((users) => {
                res.status(200).json({msg:`All userss : ${users}`});
            })
            .catch((err) => {
                console.error(err);
                res.status(500).json({ Msg: `Error Server Num 505`, error: err.message });
            });
    },
    getByID: (req, res) => {
        UsersModel.find({ Uid : req.params.id })
            .then((users) => {
                res.status(200).json(users);
            })
            .catch((err) => {
                console.error(err);
                res.status(500).json({ Msg: `Error Server Num 505`, error: err.message });
            });
    },
    addNew: (req, res) => {
        try {
            UsersModel.insertMany(req.body)
                .then((data) => {
                    return res.status(200).json({Msg: `New users Added ${data}`});
                })
                .catch((err) => {
                    return res.status(500).json({ error: "Error adding users", details: err });
                });
        } catch (error) {
            return res.status(500).json({ error: "Unexpected error occurred", details: error.message });
        }
    },
  
    Update: (req, res) => {
        UsersModel.UpdateOne(({Uid:req.params.Uid},req.body).then((data)=>{
            return res.status(200).json(`Updated By ID : ${data}`);
        }))
            .catch((err) => {
                console.error(err);
                res.status(500).json({ Msg: `Error Server Num 505`, error: err.message });
            });
    },

    Delete: (req, res) => {
        UsersModel.deleteOne({ Uid: req.params.id },req.body)
            .then((data) => {
                if (!deletedusers) {
                    return res.status(404).json({ Msg: `users with Uid ${data} not found` });
                }
                res.status(200).json({ Msg: `users Deleted : ${data}`});
            })
            .catch((err) => {
                console.error(err);
                res.status(500).json({ Msg: `Error Server Num 505`, error: err.message });
            });
    },
};