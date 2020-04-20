const VC = require("../models/vehicalcategory.model.js");

exports.create = (req,res) =>{
    if(!req.body){
        res.status(400).send({
            message : "Content cannot be empty"
        })
    }else{
        VC.create(new VC(req.body),(err,data)=>{
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

exports.findAll = (req,res) =>{
    VC.findAll((err,data)=>{
        if(err){
            res.status(500).send({
                message : err.message || "An error occured"
            });
        }else{
            res.send(data);
        }
    });
};

exports.findByLicenseNo = (req,res) =>{
    VC.findByLicenseNo(req.params.licenseno,(err,data)=>{
        if(err){
            if(err.kind === "not_found"){
                res.status(404).send({
                    message : "No record was found for license no "+req.params.licenseno
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

exports.update = (req,res) =>{
    if(!req.body){
        res.status(400).send({
            message : "Content cannot be empty"
        })
    }else{
        VC.update(req.params.licenseno,new VC(req.body),(err,data)=>{
            if(err){
                if(err.kind === "not_found"){
                    res.status(404).send({
                        message : "No record was found for license no "+req.params.licenseno
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

exports.delete = (req,res) =>{
    VC.delete(req.params.licenseno,(err,data)=>{
        if(err){
            if(err.kind === "not_found"){
                res.status(404).send({
                    message : "No record was found for license no "+req.params.licenseno
                });
            }else{
                res.status(500).send({
                    message : err.message || "An error occured"
                });
            }
        }else{
            res.send({message:"Deleted record of license no "+req.params.licenseno});
        }
    });
};

exports.deleteAll = (req,res) =>{
    VC.deleteAll((err,data)=>{
        if(err){
            res.status(500).send({
                message : err.message || "An error occured"
            });
        }else{
            res.send({message : "All records have been deleted"});
        }
    });
};