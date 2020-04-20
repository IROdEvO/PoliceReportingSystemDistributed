module.exports = app =>{

    const driver = require("../controllers/driver.controller.js");
    app.post("/drivers", driver.create);
    app.get("/drivers", driver.findAll);
    app.get("/drivers/:licenseno", driver.findByLicenseNo);
    app.put("/drivers/:licenseno", driver.update);
    app.delete("/drivers/:licenseno", driver.delete);
    app.delete("/drivers", driver.deleteAll);
    app.get("/drivers/verifypassword/:licenseno/:password",driver.verifyPassword);

};