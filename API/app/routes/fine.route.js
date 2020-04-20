module.exports = app =>{

    const fines = require("../controllers/fine.controller.js");
    app.post("/fines", fines.create);
    app.get("/fines", fines.findAll);
    app.get("/fines/:fineno", fines.findByFineNo);
    app.put("/fines/:fineno", fines.update);
    app.delete("/fines/:fineno", fines.delete);
    app.get("/fines/license/:licenseno", fines.findByLicenseNo);
    app.put("/fines/license/:licenseno", fines.updateByLicenseNo);
    app.delete("/fines/license/:licenseno", fines.deleteByLicenseNo);
    app.delete("/fines", fines.deleteAll);

};