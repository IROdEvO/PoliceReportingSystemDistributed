const Fine = require("../models/fine.model.js");

exports.create = (req,res)=>{
    if(!req.body){
        res.status(400).send({
            message : "Content cannot be empty"
        });
    }else{
        Fine.create(new Fine(req.body),(err,data)=>{
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
    Fine.findAll((err,data)=>{
        if(err){
            res.status(500).send({
                message : err.message || "An error occured"
            });
        }else{
            res.send(data);
        }
    })
};

exports.findByFineNo = (req,res) =>{
    Fine.findByFineNo(req.params.fineno,(err,data)=>{
        if(err){
            if(err.kind === "not_found"){
                res.status(404).send({
                    message : "No record was found under fine no "+req.params.fineno
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
        });
    }else{
        Fine.update(req.params.fineno,new Fine(req.body),(err,data)=>{
            if(err){
                if(err.kind === "not_found"){
                    res.status(404).send({
                        message : "No record was found for fine no "+req.params.fineno
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
    Fine.delete(req.params.fineno,(err,data)=>{
        if(err){
            if(err.kind === "not_found"){
                res.status(404).send({
                    message : "No record was found under fine no "+req.params.fineno
                });
            }else{
                res.status(500).send({
                    message : err.message || "An error occured"
                });
            }
            
        }else{
            res.send({message:"Fine record under fine no "+req.params.fineno+" was successfully deleted"});
        }
    });
};

exports.findByLicenseNo = (req,res) =>{
    Fine.findByLicenseNo(req.params.licenseno,(err,data)=>{
        if(err){
            if(err.kind === "not_found"){
                res.status(404).send({
                    message : "No record was found under license no "+req.params.licenseno
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

exports.updateByLicenseNo = (req,res) =>{
    if(!req.body){
        res.status(400).send({
            message : "Content cannot be empty"
        });
    }else{
        Fine.updateByLicenseNo(req.params.licenseno,new Fine(req.body),(err,data)=>{
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

exports.deleteByLicenseNo = (req,res) =>{
    Fine.deleteByLicenseNo(req.params.licenseno,(err,data)=>{
        if(err){
            if(err.kind === "not_found"){
                res.status(404).send({
                    message : "No record was found under license no "+req.params.licenseno
                });
            }else{
                res.status(500).send({
                    message : err.message || "An error occured"
                });
            }
            
        }else{
            res.send({message:"Fine record under license no "+req.params.licenseno+" was successfully deleted"});
        }
    });
};

exports.deleteAll = (req,res) =>{
    Fine.deleteAll((err,data)=>{
        if(err){
            res.status(500).send({
                message : err.message || "An error occured"
            });
        }else{
            res.send({
                message : "All fine records were deleted successfully"
            });
        }
    });
};