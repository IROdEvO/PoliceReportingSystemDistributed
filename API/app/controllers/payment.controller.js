const Payment = require("../models/payment.model.js");

exports.create = (req,res) => {
    if(!req.body){
        res.status(400).send({
            message : "Content cannot be empty"
        });
    }else{
        Payment.create(new Payment(req.body),(err,data)=>{
            if(err){
                res.status(500).send({
                    message : err.message || "Error"
                });
            }else{
                res.send(data);
            }
        });
    }
  
};

exports.update = (req,res) => {
    if(!req.body){
        res.status(400).send({
            message : "Content cannot be empty"
        });
    }else{
        Payment.update(req.params.licenseno,new Payment(req.body),(err,data)=>{
            if(err){
                if(err.kind === "not_found"){
                    res.status(404).send({
                        message : "No record was found for license no "+req.params.licenseno
                    })
                }else{
                    res.status(500).send({
                        message : err.message || "Error"
                    });
                }
            }else{
                res.send(data);
            }
        });
    }
};

exports.updateByBankId = (req,res) => {
    if(!req.body){
        res.status(400).send({
            message : "Content cannot be empty"
        });
    }else{
        Payment.updateByBankId(req.params.bankid,new Payment(req.body),(err,data)=>{
            if(err){
                if(err.kind === "not_found"){
                    res.status(404).send({
                        message : "No record was found for bank id "+req.params.bankid
                    })
                }else{
                    res.status(500).send({
                        message : err.message || "Error"
                    });
                }
            }else{
                res.send(data);
            }
        });
    }
};

exports.findAll = (req,res) => {
    Payment.findAll((err,data)=>{
        if(err){
            res.status(500).send({
                message : err.message || "Error"
            });
        }else{
            res.send(data);
        }
    });
};

exports.findByLicenseNo = (req,res) => {
    Payment.findByLicenseNo(req.params.licenseno,(err,data)=>{
        if(err){
            if(err.kind === "not_found"){
                res.status(404).send({
                    message : "No record was found for license no "+req.params.licenseno
                })
            }else{
                res.status(500).send({
                    message : err.message || "Error"
                });
            }
        }else{
            res.send(data);
        }
    });
};

exports.findByBankId = (req,res) => {
    Payment.findByBankId(req.params.bankid,(err,data)=>{
        if(err){
            if(err.kind === "not_found"){
                res.status(404).send({
                    message : "No record was found for bank id "+req.params.bankid
                })
            }else{
                res.status(500).send({
                    message : err.message || "Error"
                });
            }
        }else{
            res.send(data);
        }
    });
};

exports.delete = (req,res) => {
    Payment.delete(req.params.licenseno,(err,data)=>{
        if(err){
            if(err.kind === "not_found"){
                res.status(404).send({
                    message : "No record was found for license no "+req.params.licenseno
                })
            }else{
                res.status(500).send({
                    message : err.message || "Error"
                });
            }
        }else{
            res.send({message:"Record under license number "+req.params.licenseno+" was deleted"});
        }
    });
};

exports.deleteByBankId = (req,res) => {
    Payment.deleteByBankId(req.params.bankid,(err,data)=>{
        if(err){
            if(err.kind === "not_found"){
                res.status(404).send({
                    message : "No record was found for bank id "+req.params.bankid
                })
            }else{
                res.status(500).send({
                    message : err.message || "Error"
                });
            }
        }else{
            res.send({message:"Record under bank id "+req.params.bankid+" was deleted"});
        }
    });
};

exports.deleteAll = (req,res) => {
    Payment.deleteAll((err,data)=>{
        if(err){
            res.status(500).send({
                message : err.message || "Error"
            });
        }else{
            res.send({
                message : "All payment records have been deleted"
            });
        }
    });
};