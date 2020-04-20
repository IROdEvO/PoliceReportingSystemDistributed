const sql = require("./db.js");
const bcrypt = require("bcrypt");
const Officer = function(officer){
    this.Police_ID = officer.Police_ID;
    this.Admin_ID = officer.Admin_ID;
    this.First_Name = officer.First_Name;
    this.Last_Name = officer.Last_Name;
    this.Email = officer.Email;
    this.Password = officer.Password;
};

Officer.create = (newOfficer,result) =>{
    bcrypt.hash(newOfficer.Password,10,(err,hash)=>{
        if(err){
            console.log("Error hashing password",err);
            result(err,null);
            return;
        }else{
            sql.query("INSERT INTO Police_Officer SET Police_ID = ?,\
            Admin_ID = ?,\
            First_Name = ?,\
            Last_Name = ?,\
            Email = ?,\
            Password = ?\
            ",[newOfficer.Police_ID,newOfficer.Admin_ID,newOfficer.First_Name,newOfficer.Last_Name,newOfficer.Email,hash],(err,res)=>{
                if(err){
                    console.log("Error: ",err);
                    result(err,null);
                    return;
                }else{
                    console.log("Created Record: ",{...newOfficer});
                    result(null,{...newOfficer});
                    return;
                }
            });
        }
    });
};

Officer.update = (policeid,newOfficer,result) =>{
    bcrypt.hash(newOfficer.Password,10,(err,hash)=>{
        if(err){
            console.log("Error hashing password ",err);
            result(err,null);
            return;
        }else{
            sql.query("UPDATE Police_Officer SET Admin_ID = ?,\
            First_Name =?,\
            Last_Name = ?,\
            Email = ?,\
            Password = ? WHERE Police_ID = ?\
            ",[newOfficer.Admin_ID,newOfficer.First_Name,newOfficer.Last_Name,newOfficer.Email,hash,policeid],(err,res)=>{
                if(err){
                    console.log("Error: ",err);
                    result(err,null);
                    return;
                }else if(res.affectedRows == 0){
                    console.log("No record was found under police id ",policeid);
                    result({kind:"not_found"},null);
                    return;
                }else{
                    console.log("Updated Officer: ",{...newOfficer});
                    result(null,{...newOfficer});
                    return;
                }
            });
        }
    });
};

Officer.findAll = (result) =>{
    sql.query("SELECT * FROM Police_Officer",(err,res)=>{
        if(err){
            console.log("Error: ",err);
            result(err,null);
            return;
        }else{
            console.log("Officers: ",res);
            result(null,res);
            return;
        }
    })
};

Officer.findByOfficerId = (policeid,result) =>{
    sql.query("SELECT * FROM Police_Officer WHERE Police_ID = ?",policeid,(err,res)=>{
        if(err){
            console.log("Error: ",err);
            result(err,null);
            return;
        }else if(res.length){
            console.log("Found Officer: ",res[0]);
            result(null,res[0]);
            return;
        }else{
            console.log("No record was found under police id ",policeid);
            result({kind:"not_found"},null);
            return;
        }
    });
};

Officer.delete = (policeid,result) =>{
    sql.query("DELETE FROM Police_Officer WHERE Police_ID = ?",policeid,(err,res)=>{
        if(err){
            console.log("Error: ",err);
            result(err,null);
            return;
        }else if(res.affectedRows == 0){
            console.log("No records were found for police id ",policeid);
            result({kind:"not_found"},null);
            return;
        }else{
            console.log("Deleted record under police id ",policeid);
            result(null,res);
            return;
        }
    });
};

Officer.deleteAll = (result) =>{
    sql.query("DELETE FROM Police_Officer",(err,res)=>{
        if(err){
            console.log("Error: ",err);
            result(err,null);
            return;
        }else{
            console.log("All officer records were successfully deleted");
            result(null,res);
            return;
        }
    });
};

Officer.verifyPassword = (policeid,password,result) =>{
    sql.query("SELECT Password from Police_Officer WHERE Police_ID = ?",policeid,(err,res)=>{
        if(err){
            console.log("Error: ",err);
            result(err,null);
            return;
        }else if(res.length){
            bcrypt.compare(password,res[0].Password,(err,res)=>{
                if(res){
                    console.log("Password matchs");
                    result(null,{kind:"match"});
                    return;
                }else{
                    console.log("Password does not match ");
                    result(null,{kind:"unmatch"});
                    return;
                }
            });
        }else{
            console.log("No records were found for police id",policeid);
            result({kind:"not_found"},null);
            return;
        }
    });
}

module.exports = Officer;