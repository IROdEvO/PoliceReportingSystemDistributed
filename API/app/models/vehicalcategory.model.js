const sql = require("./db.js");
const VC = function(vc){
    this.License_No = vc.License_No;
    this.Category = vc.Category;
    this.Description = vc.Description;
};

VC.create = (newRecord,result) =>{
    sql.query("INSERT INTO Vehical_Category SET ?",newRecord,(err,res)=>{
        if(err){
            console.log("Error: ",err);
            result(err,null);
            return;
        }else{
            console.log("New Record: ",{...newRecord});
            result(null,{...newRecord});
            return;
        }
    })
};

VC.findAll = (result) =>{
    sql.query("SELECT * FROM Vehical_Category",(err,res)=>{
        if(err){
            console.log("Error: ",err);
            result(err,null);
            return;
        }else{
            console.log("Vehical Categories ",res);
            result(null,res);
            return;
        }
    });
};

VC.findByLicenseNo = (licenseno,result) =>{
    sql.query("SELECT * FROM Vehical_Category WHERE License_No = ?",licenseno,(err,res)=>{
        if(err){
            console.log("Error: ",err);
            result(err,null);
            return;
        }else if(res.length){
            console.log("Records: ",res[0]);
            result(null,res[0]);
            return;
        }else{
            console.log("No record was found for license no "+licenseno);
            result({kind:"not_found"},null);
            return;
        }
    });
};

VC.update = (licenseno,record,result) =>{
    sql.query("UPDATE Vehical_Category SET ? WHERE License_No = ?",[record,licenseno],(err,res)=>{
        if(err){
            console.log("Error: ",err);
            result(err,null);
            return;
        }else if(res.affectedRows == 0){
            console.log("No record was found for license no "+licenseno);
            result({kind:"not_found"},null);
            return;
        }else{
            console.log("Updated Record: ",{...record});
            result(null,{...record});
            return;
        }
    })
};

VC.delete = (licenseno,result) =>{
    sql.query("DELETE FROM Vehical_Category WHERE License_No = ?",licenseno,(err,res)=>{
        if(err){
            console.log("Error: ",err);
            result(err,null);
            return;
        }else if(res.affectedRows == 0){
            console.log("No record was found for license no "+licenseno);
            result({kind:"not_found"},null);
            return;
        }else{
            console.log("Deleted record of license no "+licenseno);
            result(null,res);
            return;
        }
    });

};

VC.deleteAll = (result) =>{
    sql.query("DELETE FROM Vehical_Category",(err,res)=>{
        if(err){
            console.log("Error: ",err);
            result(err,null);
            return;
        }else{
            console.log("All vehical category records have been deleted");
            result(err,res);
            return;
        }
    });
};

module.exports = VC;