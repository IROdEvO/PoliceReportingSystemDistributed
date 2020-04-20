const sql = require("./db.js");

const Offense = function(offense){
    this.Fine_No = offense.Fine_No;
    this.Offense = offense.Offense;
    this.Offense_No = offense.Offense_No;
};

Offense.create = (newOffense,result) =>{
    sql.query("INSERT INTO Offences SET ?",newOffense,(err,res)=>{
        if(err){
            console.log("Error: ",err);
            result(err,null);
            return;
        }else{
            console.log("New record created");
            console.log({...newOffense});
            result(null,{...newOffense});
            return;
        }
    });
};

Offense.findAll = (result) =>{
    sql.query("SELECT * FROM Offences",(err,res)=>{
        if(err){
            console.log("Error: ",err);
            result(err,null);
            return;
        }else{
            console.log("Offences: ",res);
            result(null,res);
            return;
        }
    });
};

Offense.findByFineNo = (fineno,result) =>{
    sql.query("SELECT * FROM Offences WHERE Fine_No = ?",fineno,(err,res)=>{
        if(err){
            console.log("Error: ",err);
            result(err,null);
            return;
        }else if(res.length){
            console.log("Offence: ",res);
            result(null,res);
            return;
        }else{
            console.log("No offence record is available for fine no ",fineno);
            result({kind:"not_found"},null);
            return;
        }
    });
};

Offense.findByOffenceNo = (offenceno,result) =>{
    sql.query("SELECT * FROM Offences WHERE Offense_No = ?",offenceno,(err,res)=>{
        if(err){
            console.log("Error: ",err);
            result(err,null);
            return;
        }else if(res.length){
            console.log("Offence: ",res);
            result(null,res);
            return;
        }else{
            console.log("No offence record is available for offence no ",offenceno);
            result({kind:"not_found"},null);
            return;
        }
    });
};

Offense.update = (fineno,offense,result) =>{
    sql.query("UPDATE Offences SET ? WHERE Fine_No = ?",[offense,fineno],(err,res)=>{
        if(err){
            console.log("Error: ",err);
            result(err,null);
            return;
        }else if(res.affectedRows == 0){
            console.log("No record was found for fine no "+fineno);
            result({kind:"not_found"},null);
            return;
        }else{
            console.log("Updated Record: ",{...offense});
            result(null,{...offense});
            return;
        }
    });
};

Offense.updateByOffenceNo = (offenceno,offense,result) =>{
    sql.query("UPDATE Offences SET ? WHERE Offense_No = ?",[offense,offenceno],(err,res)=>{
        if(err){
            console.log("Error: ",err);
            result(err,null);
            return;
        }else if(res.affectedRows == 0){
            console.log("No record was found for offence no "+offenceno);
            result({kind:"not_found"},null);
            return;
        }else{
            console.log("Updated Record: ",{...offense});
            result(null,{...offense});
            return;
        }
    });
};

Offense.delete = (fineno,result) =>{
    sql.query("DELETE FROM Offences WHERE Fine_No = ?",fineno,(err,res)=>{
        if(err){
            console.log("Error: ",err);
            result(err,null);
            return;
        }else if(res.affectedRows == 0){
            console.log("No offence record available for fine no ",fineno);
            result({kind:"not_found"},null);
            return;
        }else{
            console.log("Offence record under fine no "+fineno+" was deleted successfully");
            result(null,res);
            return;
        }
    });
};

Offense.deleteByOffenceNo = (offenceno,result) =>{
    sql.query("DELETE FROM Offences WHERE Offense_No = ?",offenceno,(err,res)=>{
        if(err){
            console.log("Error: ",err);
            result(err,null);
            return;
        }else if(res.affectedRows == 0){
            console.log("No offence record available for offence no ",offenceno);
            result({kind:"not_found"},null);
            return;
        }else{
            console.log("Offence record under offence no "+offenceno+" was deleted successfully");
            result(null,res);
            return;
        }
    });
};

Offense.deleteAll = (result) =>{
    sql.query("DELETE FROM Offences",(err,res)=>{
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

module.exports = Offense;