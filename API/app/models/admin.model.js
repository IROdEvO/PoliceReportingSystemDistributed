const sql = require("./db.js");
const bcrypt = require("bcrypt");

const Admin = function(admin){
    this.Admin_ID = admin.Admin_ID;
    this.First_Name = admin.First_Name;
    this.Last_Name = admin.Last_Name;
    this.Admin_Type = admin.Admin_Type;
    this.Password = admin.Password;
};

Admin.create = (newAdmin,result) =>{
    bcrypt.hash(newAdmin.Password,10,(err,hash)=>{
        if(err){
            console.log("Error hashing password",err);
            result(err,null);
            return;
        }else{
            sql.query("INSERT INTO Admin SET Admin_ID = ?,\
            First_Name = ?,\
            Last_Name = ?,\
            Admin_Type = ?,\
            Password = ?\
            ",[newAdmin.Admin_ID,newAdmin.First_Name,newAdmin.Last_Name,newAdmin.Admin_Type,hash],(err,res)=>{
                if(err){
                    console.log("Error: ",err);
                    result(err,null);
                    return;
                }else{
                    console.log("Created Record: ",{...newAdmin});
                    result(null,{...newAdmin});
                    return;
                }
            });
        }
    });
};

Admin.update = (adminid,newAdmin,result) =>{
    bcrypt.hash(newAdmin.Password,10,(err,hash)=>{
        if(err){
            console.log("Error hashing password ",err);
            result(err,null);
            return;
        }else{
            sql.query("UPDATE Admin SET First_Name =?,\
            Last_Name = ?,\
            Admin_Type = ?,\
            Password = ? WHERE Admin_ID = ?\
            ",[newAdmin.First_Name,newAdmin.Last_Name,newAdmin.Admin_Type,hash,adminid],(err,res)=>{
                if(err){
                    console.log("Error: ",err);
                    result(err,null);
                    return;
                }else if(res.affectedRows == 0){
                    console.log("No record was found under admin id ",adminid);
                    result({kind:"not_found"},null);
                    return;
                }else{
                    console.log("Updated Admin: ",{...newAdmin});
                    result(null,{...newAdmin});
                    return;
                }
            });
        }
    });
};

Admin.findAll = (result) =>{
    sql.query("SELECT * FROM Admin",(err,res)=>{
        if(err){
            console.log("Error: ",err);
            result(err,null);
            return;
        }else{
            console.log("Admins: ",res);
            result(null,res);
            return;
        }
    })
};

Admin.findByAdminId = (adminid,result) =>{
    sql.query("SELECT * FROM Admin WHERE Admin_ID = ?",adminid,(err,res)=>{
        if(err){
            console.log("Error: ",err);
            result(err,null);
            return;
        }else if(res.length){
            console.log("Found Admin: ",res[0]);
            result(null,res[0]);
            return;
        }else{
            console.log("No record was found under admin id ",adminid);
            result({kind:"not_found"},null);
            return;
        }
    });
};

Admin.delete = (adminid,result) =>{
    sql.query("DELETE FROM Admin WHERE Admin_ID = ?",adminid,(err,res)=>{
        if(err){
            console.log("Error: ",err);
            result(err,null);
            return;
        }else if(res.affectedRows == 0){
            console.log("No records were found for admin id ",adminid);
            result({kind:"not_found"},null);
            return;
        }else{
            console.log("Deleted admin record under admin id ",adminid);
            result(null,res);
            return;
        }
    });
};

Admin.deleteAll = (adminid,result) =>{
    sql.query("DELETE FROM Admin",(err,res)=>{
        if(err){
            console.log("Error: ",err);
            result(err,null);
            return;
        }else{
            console.log("All admin records were successfully deleted");
            result(null,res);
            return;
        }
    });
};

Admin.verifyPassword = (adminid,password,result) =>{
    sql.query("SELECT Password from Admin WHERE Admin_ID = ?",adminid,(err,res)=>{
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
            console.log("No records were found for admin id",adminid);
            result({kind:"not_found"},null);
            return;
        }
    });
}

module.exports = Admin;