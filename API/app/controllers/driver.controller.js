const Driver = require("../models/driver.model.js");

exports.create = (req,res) =>{
  if(!req.body){
      res.status(400).send({
          message : "Content cannot be empty"
      });
  }else{
      Driver.create(new Driver(req.body),(err,data)=>{
        if(err){
            res.status(500).send({
                message : err.message || "Error occured"
            });
        }else{
            res.send(data);
        }
      });
  }
};

exports.findAll = (req,res) => {
    Driver.findAll((err,data)=>{
        if(err){
            res.status(500).send({
                message : err.message || "Error occured"
            });
        }else{
            res.send(data);
        }
    })
};

exports.findByLicenseNo = (req,res) =>{
    Driver.findByLicenseNo(req.params.licenseno,(err,data)=>{
        if(err){
            if(err.kind === "not_found"){
                res.status(404).send({
                    message : "No record was found for license no "+req.params.licenseno
                });
            }else{
                res.status(500).send({
                    message : err.message || "Error occured"
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
        Driver.update(req.params.licenseno,new Driver(req.body),(err,data)=>{
            if(err){
                if(err.kind === "not_found"){
                    res.status(404).send({
                        message : "No record was found for license no "+req.params.licenseno
                    });
                }else{
                    res.status(500).send({
                        message : err.message || "Error occured"
                    });
                }
            }else{
                res.send(data);
            }
        });
    }
};

exports.delete = (req,res) =>{
   Driver.delete(req.params.licenseno,(err,data)=>{
    if(err){
        res.status(500).send({
            message : err.message || "Error occured"
        });
    }else{
        res.send({
            message : "Driver record under license no "+req.params.licenseno+" was successfully deleted"
        });
    }
   });
};

exports.deleteAll = (req,res) => {
    Driver.deleteAll((err,data)=>{
        if(err){
            res.status(500).send({
                message : err.message || "Error occured"
            });
        }else{
            res.send({
                message : "All driver records were deleted successfully"
            });
        }
    });
};

exports.verifyPassword = (req,res) =>{
    Driver.verifyPassword(req.params.licenseno,req.params.password,(err,data)=>{
        if(err){
            if(err.kind === "not_found"){
                res.status(404).send({
                    message : "No records were found for license no "+req.params.licenseno
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