module.exports = app => {
    const line = require("../controllers/line.controller.js");
    var router = require("express").Router();

    // Retrieve all Lines
    router.get("/", line.findAll);
    // Retrieve a single Line by Id
    router.get("/:id", line.findOne);
    
    app.use('/api/lines', router);
  };