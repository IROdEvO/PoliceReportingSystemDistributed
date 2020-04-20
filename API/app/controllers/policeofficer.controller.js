const Officer = require("../models/policeofficer.model.js");

exports.create = (req,res) =>{
    if(!req.body){
        res.status(400).send({
            message : "Content cannot be empty"
        });
    }else{
        Officer.create(new Officer(req.body),(err,data)=>{
            if(err){
                res.status(500).send({
                    message : err.message || "An error occured"
                })
            }else{
                res.send(data);
            }
        });
    }
};

exports.findAll = (req,res) =>{
    Officer.findAll((err,data)=>{
        if(err){
            res.status(500).send({
                message : err.message || "An error occured"
            })
        }else{
            res.send(data);
        }
    });
};

exports.findByOfficerId = (req,res) =>{
    Officer.findByOfficerId(req.params.policeid,(err,data)=>{
        if(err){
            if(err.kind === "not_found"){
                res.status(404).send({
                    message : "No record was found under police id "+req.params.policeid
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
        Officer.update(req.params.policeid,new Officer(req.body),(err,data)=>{
            if(err){
                if(err.kind === "not_found"){
                    res.status(404).send({
                        message : "No record was found for police id "+req.params.policeid
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
    Officer.delete(req.params.policeid,(err,data)=>{
        if(err){
            if(err.kind === "not_found"){
                res.status(404).send({
                    message : "No record was found under police id "+req.params.policeid
                });
            }else{
                res.status(500).send({
                    message : err.message || "An error occured"
                });
            }
        }else{
            res.send({
                message : "Deleted successfully"
            });
        }
    });
};

exports.deleteAll = (req,res) =>{
    Officer.deleteAll(req.params.policeid,(err,data)=>{
        if(err){
            res.status(500).send({
                message : err.message || "An error occured"
            });
        }else{
            res.send({
                message : "All officer records were deleted successfully"
            });
        }
    });
};

exports.verifyPassword = (req,res) =>{
    Officer.verifyPassword(req.params.policeid,req.params.password,(err,data)=>{
        if(err){
            if(err.kind === "not_found"){
                res.status(404).send({
                    message : "No records were found for police id "+req.params.policeid
                });
            }else{
                res.status(500).send({
                    message : err.message || "An error occured"
                });
            }
        }else if(data.kind === "match"){
            res.send({
                message : "Password is correct"
            });
        }else if(data.kind === "unmatch"){
            res.send({
                message : "Password is wrong" 
            });
        }
    });
};