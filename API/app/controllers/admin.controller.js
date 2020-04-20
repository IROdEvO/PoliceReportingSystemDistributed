const Admin = require("../models/admin.model.js");

exports.create = (req,res) =>{
    if(!req.body){
        res.status(400).send({
            message : "Content cannot be empty"
        });
    }else{
        Admin.create(new Admin(req.body),(err,data)=>{
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
    Admin.findAll((err,data)=>{
        if(err){
            res.status(500).send({
                message : err.message || "An error occured"
            })
        }else{
            res.send(data);
        }
    });
};

exports.findByAdminId = (req,res) =>{
    Admin.findByAdminId(req.params.adminid,(err,data)=>{
        if(err){
            if(err.kind === "not_found"){
                res.status(404).send({
                    message : "No record was found under admin id "+req.params.adminid
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
        Admin.update(req.params.adminid,new Admin(req.body),(err,data)=>{
            if(err){
                if(err.kind === "not_found"){
                    res.status(404).send({
                        message : "No record was found for admin id "+req.params.adminid
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
    Admin.delete(req.params.adminid,(err,data)=>{
        if(err){
            if(err.kind === "not_found"){
                res.status(404).send({
                    message : "No record was found under admin id "+req.params.adminid
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
    Admin.deleteAll(req.params.adminid,(err,data)=>{
        if(err){
            res.status(500).send({
                message : err.message || "An error occured"
            });
        }else{
            res.send({
                message : "All admin records were deleted successfully"
            });
        }
    });
};

exports.verifyPassword = (req,res) =>{
    Admin.verifyPassword(req.params.adminid,req.params.password,(err,data)=>{
        if(err){
            if(err.kind === "not_found"){
                res.status(404).send({
                    message : "No records were found for admin id "+req.params.adminid
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