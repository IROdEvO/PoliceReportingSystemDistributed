const sql = require("./db.js");
const Payment = function(payment){
    this.Bank_ID = payment.Bank_ID;
    this.License_No = payment.License_No;
    this.Date = payment.Date;
    this.Time = payment.Time;
    this.Amount = payment.Amount;
};

Payment.create = (newPayment,result) =>{
    sql.query("INSERT INTO Payments SET ?",newPayment,(err,res)=>{
        if(err){
            console.log("Error: ",err);
            result(err,null);
            return;
        }else{
            console.log("New Record: ",{...newPayment});
            result(null,{...newPayment});
            return;
        }
    });
};

Payment.update = (licenseno,payment,result) =>{
    sql.query("UPDATE Payments SET ? WHERE License_No = ?",[payment,licenseno],(err,res)=>{
        if(err){
            console.log("Error: ",err);
            result(err,null);
            return;
        }else if(res.affectedRows == 0){
            console.log("No record was found for license no "+licenseno);
            result({kind:"not_found"},null);
            return;
        }else{
            console.log("Updated : ",{...payment});
            result(null,{...payment});
            return;
        }
    });
};

Payment.updateByBankId = (bankid,payment,result) =>{
    sql.query("UPDATE Payments SET ? WHERE Bank_ID = ?",[payment,bankid],(err,res)=>{
        if(err){
            console.log("Error: ",err);
            result(err,null);
            return;
        }else if(res.affectedRows == 0){
            console.log("No record was found for bank id "+bankid);
            result({kind:"not_found"},null);
            return;
        }else{
            console.log("Updated : ",{...payment});
            result(null,{...payment});
            return;
        }
    });
};

Payment.findAll = (result) =>{
    sql.query("SELECT * FROM Payments",(err,res)=>{
        if(err){
            console.log("Error: ",err);
            result(err,null);
            return;
        }else{
            console.log("Payment Records : ",res);
            result(null,res);
            return;
        }
    });
};

Payment.findByLicenseNo = (licenseno,result) =>{
    sql.query("SELECT * FROM Payments WHERE License_No = ?",licenseno,(err,res)=>{
        if(err){
            console.log("Error: ",err);
            result(err,null);
            return;
        }else if(res.length){
            console.log("Payment Record : ",res[0]);
            result(null,res[0]);
            return;
        }else{
            console.log("No record was found for license no "+licenseno);
            result({kind:"not_found"},null);
            return;
        }
    });
};

Payment.findByBankId = (bankid,result) =>{
    sql.query("SELECT * FROM Payments WHERE Bank_ID = ?",bankid,(err,res)=>{
        if(err){
            console.log("Error: ",err);
            result(err,null);
            return;
        }else if(res.length){
            console.log("Payment Record : ",res[0]);
            result(null,res[0]);
            return;
        }else{
            console.log("No record was found for bank id "+bankid);
            result({kind:"not_found"},null);
            return;
        }
    });
};

Payment.delete = (licenseno,result) =>{
    sql.query("DELETE FROM Payments WHERE License_No = ?",licenseno,(err,res)=>{
        if(err){
            console.log("Error: ",err);
            result(err,null);
            return;
        }else if(res.affectedRows == 0){
            console.log("No record was found for license no "+licenseno);
            result({kind:"not_found"},null);
            return;
        }else{
            console.log("Payment record of license no "+licenseno+" was deleted");
            result(null,res);
            return;
        }
    });
};

Payment.deleteByBankId = (bankid,result) =>{
    sql.query("DELETE FROM Payments WHERE Bank_ID = ?",bankid,(err,res)=>{
        if(err){
            console.log("Error: ",err);
            result(err,null);
            return;
        }else if(res.affectedRows == 0){
            console.log("No record was found for bank id"+bankid);
            result({kind:"not_found"},null);
            return;
        }else{
            console.log("Payment record of bank id "+bankid+" was deleted");
            result(null,res);
            return;
        }
    });
};

Payment.deleteAll = (result) =>{
    sql.query("DELETE FROM Payments",(err,res)=>{
        if(err){
            console.log("Error: ",err);
            result(err,null);
            return;
        }else{
            console.log("All payment records were deleted");
            result(null,res);
            return;
        }
    });
};

module.exports = Payment;