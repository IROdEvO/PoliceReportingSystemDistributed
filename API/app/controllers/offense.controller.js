const Offense = require("../models/offense.model.js");

exports.create = (req,res)=>{
    if(!req.body){
        res.status(400).send({
            message : "Content cannot be empty"
        });
    }else{
        Offense.create(new Offense(req.body),(err,data)=>{
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
    Offense.findAll((err,data)=>{
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
    Offense.findByFineNo(req.params.fineno,(err,data)=>{
        if(err){
            if(err.kind === "not_found"){
                res.status(404).send({
                    message : "No offense record was found under fine no "+req.params.fineno
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

exports.findByOffenceNo = (req,res) =>{
    Offense.findByOffenceNo(req.params.offenceno,(err,data)=>{
        if(err){
            if(err.kind === "not_found"){
                res.status(404).send({
                    message : "No offense record was found under offense no "+req.params.offenceno
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
        Offense.update(req.params.fineno,new Offense(req.body),(err,data)=>{
            if(err){
                if(err.kind === "not_found"){
                    res.status(404).send({
                        message : "No offense record was found for fine no "+req.params.fineno
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

exports.updateByOffenceNo = (req,res) =>{
    if(!req.body){
        res.status(400).send({
            message : "Content cannot be empty"
        });
    }else{
        Offense.updateByOffenceNo(req.params.offenceno,new Offense(req.body),(err,data)=>{
            if(err){
                if(err.kind === "not_found"){
                    res.status(404).send({
                        message : "No offense record was found for offense no "+req.params.offenceno
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
    Offense.delete(req.params.fineno,(err,data)=>{
        if(err){
            if(err.kind === "not_found"){
                res.status(404).send({
                    message : "No offense record was found under fine no "+req.params.fineno
                });
            }else{
                res.status(500).send({
                    message : err.message || "An error occured"
                });
            }
            
        }else{
            res.send({message:"Offense record under fine no "+req.params.fineno+" was successfully deleted"});
        }
    });
};

exports.deleteByOffenceNo = (req,res) =>{
    Offense.deleteByOffenceNo(req.params.offenceno,(err,data)=>{
        if(err){
            if(err.kind === "not_found"){
                res.status(404).send({
                    message : "No offense record was found under offense no "+req.params.offenceno
                });
            }else{
                res.status(500).send({
                    message : err.message || "An error occured"
                });
            }
            
        }else{
            res.send({message:"Offense record under offense no "+req.params.offenceno+" was successfully deleted"});
        }
    });
};

exports.deleteAll = (req,res) =>{
    Offense.deleteAll((err,data)=>{
        if(err){
            res.status(500).send({
                message : err.message || "An error occured"
            });
        }else{
            res.send({
                message : "All offense records were deleted successfully"
            });
        }
    });
};