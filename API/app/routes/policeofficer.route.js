module.exports = app =>{

    const officer = require("../controllers/policeofficer.controller.js");
    app.post("/officers", officer.create);
    app.get("/officers", officer.findAll);
    app.get("/officers/:policeid", officer.findByOfficerId);
    app.put("/officers/:policeid", officer.update);
    app.delete("/officers/:policeid", officer.delete);
    app.delete("/officers", officer.deleteAll);
    app.get("/officers/verifypassword/:policeid/:password",officer.verifyPassword);

};