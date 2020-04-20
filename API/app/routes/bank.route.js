module.exports = app =>{
    const banks = require("../controllers/bank.controller.js");
    app.post("/banks", banks.create);
    app.get("/banks", banks.findAll);
    app.get("/banks/:bankid", banks.findByBankId);
    app.put("/banks/:bankid", banks.update);
    app.delete("/banks/:bankid", banks.delete);
    app.delete("/banks", banks.deleteAll);
};