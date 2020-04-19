module.exports = app =>{

    const admins = require("../controllers/admin.controller.js");
    app.post("/admins", admins.create);
    app.get("/admins", admins.findAll);
    app.get("/admins/:adminid", admins.findByAdminId);
    app.put("/admins/:adminid", admins.update);
    app.delete("/admins/:adminid", admins.delete);
    app.delete("/admins", admins.deleteAll);
    app.get("/admins/verifypassword/:adminid/:password",admins.verifyPassword);

};