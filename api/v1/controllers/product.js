module.exports={
    getAll:(req,res)=>{
        try{
            
        return res.status(200).json({Msg:`All Products`});
        }
        catch
        {
            return res.status(500).json({Msg:`500 Server Error`});
        }
    },
    getByID:(req,res)=>{
        try{
        let prodid=req.params.id;
        return res.status(200).json({Msg:`Product ID : ${prodid}`});
        }
        catch
        {
            return res.status(500).json({Msg:`500 Server Error`});
        }
    },
    addNew:(req,res)=>{
        try{
        console.log(req.body);
        return res.status(200).json({Msg:`New Product Added`});
        }
        catch
        {
            return res.status(500).json({Msg:`500 Server Error`});
        }
    },
    Update:(req,res)=>{
        try{
        console.log(req.body);
        let prodid=req.params.id;
        return res.status(200).json({Msg:`${prodid} Has Been Updated`});
        }
        catch
        {
            return res.status(500).json({Msg:`500 Server Error`});
        }
    },
    Delete:(req,res)=>{
        try{
        let prodid=req.params.id;
        return res.status(200).json({Msg:`${prodid} Has Been Deleted`});
        }
        catch
        {
            return res.status(500).json({Msg:`500 Server Error`});
        }
    }
};