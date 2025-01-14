const mongoose=require('mongoose');
const order=require('../models/orders');
const OrdersModel = require('../models/orders');

module.exports = {

    getAll: (req, res) => {
        OrdersModel.find()
            .then((order) => {
                res.status(200).json({msg:`All Orders : ${order}`});
            })
            .catch((err) => {
                console.error(err);
                res.status(500).json({ Msg: `Error Server Num 505`, error: err.message });
            });
    },
    getByID: (req, res) => {
        OrdersModel.find({ Oid : req.params.id })
            .then((order) => {
                res.status(200).json(order);
            })
            .catch((err) => {
                console.error(err);
                res.status(500).json({ Msg: `Error Server Num 505`, error: err.message });
            });
    },
    addNew: (req, res) => {
        try {
            OrdersModel.insertMany(req.body)
                .then((data) => {
                    return res.status(200).json({Msg: `New order Added ${data}`});
                })
                .catch((err) => {
                    return res.status(500).json({ error: "Error adding order", details: err });
                });
        } catch (error) {
            return res.status(500).json({ error: "Unexpected error occurred", details: error.message });
        }
    },
  
    Update: (req, res) => {
        OrdersModel.UpdateOne(({Oid:req.params.Oid},req.body).then((data)=>{
            return res.status(200).json(`Updated By ID : ${data}`);
        }))
            .catch((err) => {
                console.error(err);
                res.status(500).json({ Msg: `Error Server Num 505`, error: err.message });
            });
    },

    Delete: (req, res) => {
        OrdersModel.deleteOne({ Oid: req.params.id },req.body)
            .then((data) => {
                if (!deletedorder) {
                    return res.status(404).json({ Msg: `order with Oid ${data} not found` });
                }
                res.status(200).json({ Msg: `order Deleted : ${data}`});
            })
            .catch((err) => {
                console.error(err);
                res.status(500).json({ Msg: `Error Server Num 505`, error: err.message });
            });
    },
};