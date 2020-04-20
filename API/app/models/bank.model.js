const sql = require("./db.js");
const Bank = function(bank){
    this.Bank_ID = bank.Bank_ID;
    this.Account_No = bank.Account_No;
};

Bank.create=(newBank,result)=>{
    sql.query("INSERT INTO Bank SET ?",newBank,(err,res)=>{
        if(err){
            console.log("Error: ",err);
            result(err,null);
            return;
        }else{
            console.log("New record created");
            console.log({...newBank});
            result(null,{...newBank});
            return;
        }
    });
};

Bank.findAll = (result) =>{
    sql.query("SELECT * FROM Bank",(err,res)=>{
        if(err){
            console.log("Error: ",err);
            result(err,null);
            return;
        }else{
            console.log("Bank records: ",res);
            result(null,res);
            return;
        }
    });
};

Bank.findByBankId = (bankid,result) =>{
    sql.query("SELECT * FROM Bank WHERE Bank_ID = ?",bankid,(err,res)=>{
        if(err){
            console.log("Error: ",err);
            result(err,null);
            return;
        }else if(res.length){
            console.log("Bank record: ",res);
            result(null,res);
            return;
        }else{
            console.log("No bank record available for bank id ",bankid);
            result({kind:"not_found"},null);
            return;
        }
    });
};

Bank.update = (bankid,bank,result) =>{
    sql.query("UPDATE Bank SET ? WHERE Bank_ID = ?",[bank,bankid],(err,res)=>{
        if(err){
            console.log("Error: ",err);
            result(err,null);
            return;
        }else if(res.affectedRows == 0){
            console.log("No bank record available for bank id ",bankid);
            result({kind:"not_found"},null);
            return;
        }else{
            result(null,{...bank});
        }
    });
};

Bank.delete = (bankid,result) =>{
    sql.query("DELETE FROM Bank WHERE Bank_ID = ?",bankid,(err,res)=>{
        if(err){
            console.log("Error: ",err);
            result(err,null);
            return;
        }else if(res.affectedRows == 0){
            console.log("No fine record available for fine no ",bankid);
            result({kind:"not_found"},null);
            return;
        }else{
            console.log("Fine record under fone no "+bankid+" was deleted successfully");
            result(null,res);
            return;
        }
    });
};

Bank.deleteAll = (result) =>{
    sql.query("DELETE FROM Bank",(err,res)=>{
        if(err){
            console.log("Error: ",err);
            result(err,null);
            return;
        }else{
            console.log("All bank records were successfully deleted");
            result(null,res);
            return;
        }
    });
};
module.exports = Bank;