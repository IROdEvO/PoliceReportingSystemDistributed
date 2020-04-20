const sql = require("./db.js");

const Fine = function(fine){
    this.Fine_No = fine.Fine_No;
    this.License_No = fine.License_No;
    this.Police_ID = fine.Police_ID;
    this.Police_Station = fine.Police_Station;
    this.Status = fine.Status;
    this.Court = fine.Court;
    this.Court_Date = fine.Court_Date;
    this.Vehical_Category = fine.Vehical_Category;
    this.Total_Amount = fine.Total_Amount;
    this.Vehical_No = fine.Vehical_No;
    this.Valid_Until = fine.Valid_Until;
    this.Issued_Date = fine.Issued_Date;
    this.Issued_Time = fine.Issued_Time;
};

Fine.create = (newFine,result) =>{
    sql.query("INSERT INTO Fine SET ?",newFine,(err,res)=>{
        if(err){
            console.log("Error: ",err);
            result(err,null);
            return;
        }else{
            console.log("New record created");
            console.log({...newFine});
            result(null,{...newFine});
            return;
        }
    });
};

Fine.findAll = (result) =>{
    sql.query("SELECT * FROM Fine",(err,res)=>{
        if(err){
            console.log("Error: ",err);
            result(err,null);
            return;
        }else{
            console.log("Fines: ",res);
            result(null,res);
            return;
        }
    });
};

Fine.findByFineNo = (fineno,result) =>{
    sql.query("SELECT * FROM Fine WHERE Fine_No = ?",fineno,(err,res)=>{
        if(err){
            console.log("Error: ",err);
            result(err,null);
            return;
        }else if(res.length){
            console.log("Fine: ",res);
            result(null,res);
            return;
        }else{
            console.log("No fine record available for fine no ",fineno);
            result({kind:"not_found"},null);
            return;
        }
    });
};

Fine.findByLicenseNo = (licenseno,result) =>{
    sql.query("SELECT * FROM Fine WHERE License_No = ?",licenseno,(err,res)=>{
        if(err){
            console.log("Error: ",err);
            result(err,null);
            return;
        }else if(res.length){
            console.log("Fine: ",res);
            result(null,res);
            return;
        }else{
            console.log("No fine record available for license no ",licenseno);
            result({kind:"not_found"},null);
            return;
        }
    });
}

Fine.delete = (fineno,result) =>{
    sql.query("DELETE FROM Fine WHERE Fine_No = ?",fineno,(err,res)=>{
        if(err){
            console.log("Error: ",err);
            result(err,null);
            return;
        }else if(res.affectedRows == 0){
            console.log("No fine record available for fine no ",fineno);
            result({kind:"not_found"},null);
            return;
        }else{
            console.log("Fine record under fone no "+fineno+" was deleted successfully");
            result(null,res);
            return;
        }
    });
};

Fine.deleteByLicenseNo = (licenseno,result) =>{
    sql.query("DELETE FROM Fine WHERE License_No = ?",licenseno,(err,res)=>{
        if(err){
            console.log("Error: ",err);
            result(err,null);
            return;
        }else if(res.affectedRows == 0){
            console.log("No fine record available for license no ",licenseno);
            result({kind:"not_found"},null);
            return;
        }else{
            console.log("Fine record under license no "+licenseno+" was deleted successfully");
            result(null,res);
            return;
        }
    });
};

Fine.deleteAll = (result) =>{
    sql.query("DELETE FROM Fine",(err,res)=>{
        if(err){
            console.log("Error: ",err);
            result(err,null);
            return;
        }else{
            console.log("All fine records were successfully deleted");
            result(null,res);
            return;
        }
    });
};

Fine.update = (fineno,fine,result) =>{
    sql.query("UPDATE Fine SET License_No = ?,\
     Police_ID = ?,\
     Police_Station = ?,\
     Status = ?,\
     Court = ?,\
     Court_Date = ?,\
     Vehical_Category = ?,\
     Total_Amount = ?,\
     Vehical_No = ?,\
     Valid_Until = ?,\
     Issued_Date = ?,\
     Issued_Time = ? \
     WHERE Fine_No = ?",[fine.License_No,fine.Police_ID,fine.Police_Station,
        fine.Status,fine.Court,fine.Court_Date,fine.Vehical_Category,fine.Total_Amount,
        fine.Vehical_No,fine.Valid_Until,fine.Issued_Date,fine.Issued_Time,fineno],(err,res)=>{
        if(err){
            console.log("Error: ",err);
            result(err,null);
            return;
        }else if(res.affectedRows == 0){
            console.log("No record was found for fine no "+fineno);
            result({kind:"not_found"},null);
            return;
        }else{
            console.log("Updated Record: ",{...fine});
            result(null,{...fine});
            return;
        }
    });
};

Fine.updateByLicenseNo = (licenseno,fine,result) =>{
    sql.query("UPDATE Fine SET ? WHERE License_No = ?",[fine,licenseno],(err,res)=>{
        if(err){
            console.log("Error: ",err);
            result(err,null);
            return;
        }else if(res.affectedRows == 0){
            console.log("No record was found for license no "+licenseno);
            result({kind:"not_found"},null);
            return;
        }else{
            console.log("Updated Record: ",{...fine});
            result(null,{...fine});
            return;
        }
    });
};



module.exports = Fine;