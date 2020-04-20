module.exports = app =>{
    const offences = require("../controllers/offense.controller.js");

    app.post("/offences", offences.create);
    app.get("/offences", offences.findAll);
    app.get("/offences/:fineno", offences.findByFineNo);
    app.put("/offences/:fineno", offences.update);
    app.delete("/offences/:fineno", offences.delete);
    app.get("/offences/usingoffenceno/:offenceno", offences.findByOffenceNo);
    app.put("/offences/usingoffenceno/:offenceno", offences.updateByOffenceNo);
    app.delete("/offences/usingoffenceno/:offenceno", offences.deleteByOffenceNo);
    app.delete("/offences", offences.deleteAll);
};