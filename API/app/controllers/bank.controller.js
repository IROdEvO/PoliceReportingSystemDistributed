const Bank = require("../models/bank.model.js");

exports.create = (req,res) =>{
    if(!req.body){
        res.status(400).send({
            message : "Content cannot be empty"
        });
    }else{
        Bank.create(new Bank(req.body),(err,data)=>{
            if(err){
                res.status(500).send({
                    message : err.message || "An error occured"
                });
            }else{
                res.send(data);
            }
        });
    }
};
exports.findAll =(req,res) =>{
    Bank.findAll((err,data)=>{
        if(err){
            res.status(500).send({
                message : err.message || "An error occured"
            });
        }else{
            res.send(data);
        }
    })
};
exports.findByBankId =(req,res)=>{
    Bank.findByBankId(req.params.bankid,(err,data)=>{
        if(err){
            if(err.kind === "not_found"){
                res.status(404).send({
                    message : "No record was found under bank id "+req.params.bankid
                });
            }else{
                res.status(500).send({
                    message : err.message || "An error occured"
                });
            }
            
        }else{
            res.send(data);
        }
    });
};

exports.update=(req,res)=>{
    if(!req.body){
        res.status(400).send({
            message : "Content cannot be empty"
        });
    }else{
        Bank.update(req.params.bankid,new Bank(req.body),(err,data)=>{
            if(err){
                if(err.kind === "not_found"){
                    res.status(404).send({
                        message : "No record was found for bank id "+req.params.bankid
                    });
                }else{
                    res.status(500).send({
                        message : err.message || "An error occured"
                    });
                }
                
            }else{
                res.send(data);
            }
        });
    }
};

exports.delete =(req,res)=>{
    Bank.delete(req.params.bankid,(err,data)=>{
        if(err){
            if(err.kind === "not_found"){
                res.status(404).send({
                    message : "No record was found under bankid "+req.params.bankid
                });
            }else{
                res.status(500).send({
                    message : err.message || "An error occured"
                });
            }
            
        }else{
            res.send({message:"Fine record under bank id "+req.params.bankid+" was successfully deleted"});
        }
    });
};

exports.deleteAll=(req,res)=>{
    Bank.deleteAll((err,data)=>{
        if(err){
            res.status(500).send({
                message : err.message || "An error occured"
            });
        }else{
            res.send({
                message : "All Bank records were deleted successfully"
            });
        }
    });
};