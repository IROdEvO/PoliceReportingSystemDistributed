module.exports = app =>{
    const vehicalcategories = require("../controllers/vehicalcategory.controller.js");

    app.post("/vehicalcategories", vehicalcategories.create);
    app.get("/vehicalcategories", vehicalcategories.findAll);
    app.get("/vehicalcategories/:licenseno", vehicalcategories.findByLicenseNo);
    app.put("/vehicalcategories/:licenseno", vehicalcategories.update);
    app.delete("/vehicalcategories/:licenseno", vehicalcategories.delete);
    app.delete("/vehicalcategories", vehicalcategories.deleteAll);
};