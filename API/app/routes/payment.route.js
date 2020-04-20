module.exports = app =>{
    const payments = require("../controllers/payment.controller.js");
    app.post("/payments", payments.create);
    app.get("/payments", payments.findAll);
    app.get("/payments/:licenseno", payments.findByLicenseNo);
    app.put("/payments/:licenseno", payments.update);
    app.delete("/payments/:licenseno", payments.delete);
    app.get("/payments/usingbankid/:bankid", payments.findByBankId);
    app.put("/payments/usingbankid/:bankid", payments.updateByBankId);
    app.delete("/payments/usingbankid/:bankid", payments.deleteByBankId);
    app.delete("/payments", payments.deleteAll);
};