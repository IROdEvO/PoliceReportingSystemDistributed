const sql = require("./db.js");
const bcrypt = require("bcrypt");
const Driver = function(driver){
    this.License_No = driver.License_No;
    this.Admin_ID = driver.Admin_ID;
    this.First_Name = driver.First_Name;
    this.Last_Name = driver.Last_Name;
    this.NIC = driver.NIC;
    this.Address_Line_1 = driver.Address_Line_1;
    this.Address_Line_2 = driver.Address_Line_2;
    this.Email = driver.Email;
    this.Password = driver.Password;
};

Driver.create = (newDriver,result)=>{
    bcrypt.hash(newDriver.Password,10,(err,hash)=>{
        if(err){
            console.log("Error hashing the password");
            result(err,null);
            return;
        }else{
            sql.query("INSERT INTO Driver SET License_No = ?,\
            Admin_ID = ?,\
            First_Name = ?,\
            Last_Name = ?,\
            NIC = ?,\
            Address_Line_1 = ?,\
            Address_Line_2 = ?,\
            Email = ?,\
            Password = ?\
            ",[newDriver.License_No,newDriver.Admin_ID,newDriver.First_Name,newDriver.Last_Name,newDriver.NIC,newDriver.Address_Line_1,newDriver.Address_Line_2,newDriver.Email,hash],(err,res)=>{
                if(err){
                    console.log("Error: ",err);
                    result(err,null);
                    return;
                }else{
                    console.log("Created new record");
                    console.log("Driver: ",{...newDriver});
                    result(null,{...newDriver});
                    return;
                }
            });
        }
    });
};

Driver.findAll = (result) =>{
    sql.query("SELECT * FROM Driver",(err,res)=>{
        if(err){
            console.log("Error: ",err);
            result(err,null);
            return;
        }else{
            console.log("Drivers: ",res);
            result(null,res);
            return;
        }
    });
};

Driver.findByLicenseNo = (licenseno,result) =>{
    sql.query("SELECT * FROM Driver WHERE License_No = ?",licenseno,(err,res)=>{
        if(err){
            console.log("Error: ",err);
            result(err,null);
            return;
        }else if(res.length){
            console.log("Driver: ",res[0]);
            result(null,res[0]);
            return;
        }else{
            console.log("No record was found for license no ",licenseno);
            result({kind:"not_found"},null);
            return;
        }
    });
};

Driver.update = (licenseno,driver,result) =>{
    bcrypt.hash(driver.Password,10,(err,hash)=>{
        if(err){
            console.log("Error hashing the password");
            result(err,null);
            return;
        }else{
            sql.query("UPDATE Driver SET \
            Admin_ID = ?,\
            First_Name = ?,\
            Last_Name = ?,\
            NIC = ?,\
            Address_Line_1 = ?,\
            Address_Line_2 = ?,\
            Email = ?,\
            Password = ? WHERE License_NO = ?\
            ",[driver.Admin_ID,driver.First_Name,driver.Last_Name,driver.NIC,driver.Address_Line_1,driver.Address_Line_2,driver.Email,hash,licenseno],(err,res)=>{
                if(err){
                    console.log("Error: ",err);
                    result(err,null);
                    return;
                }else if(res.affectedRows == 0){
                    console.log("No record was found for license no ",licenseno);
                    result({kind:"not_found"},null);
                    return;
                }else{
                    console.log("Updated record: ",{...driver});
                    result(null,{...driver});
                    return;
                }
            });
        }
    });
};

Driver.delete = (licenseno,result) =>{
    sql.query("DELETE FROM Driver WHERE License_No = ?",licenseno,(err,res)=>{
        if(err){
            console.log("Error: ",err);
            result(err,null);
            return;
        }else{
            console.log("Driver record under license no "+licenseno+" was successfully deleted");
            result(null,res);
            return;
        }
    });
};

Driver.deleteAll = (result) =>{
    sql.query("DELETE FROM Driver",(err,res)=>{
        if(err){
            console.log("Error: ",err);
            result(err,null);
            return;
        }else{
            console.log("All driver records were successfully deleted");
            result(null,res);
            return;
        }
    });
};

Driver.verifyPassword = (licenseno,password,result) =>{
    sql.query("SELECT Password from Driver WHERE License_No = ?",licenseno,(err,res)=>{
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
            console.log("No records were found for license no",licenseno);
            result({kind:"not_found"},null);
            return;
        }
    });
};

module.exports = Driver;