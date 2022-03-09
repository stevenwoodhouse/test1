module.exports = app => {
    const jobStatus = require("../controllers/jobStatus.controller.js");
    var router = require("express").Router();

    // Retrieve all JobStatuses
    router.get("/", jobStatus.findAll);
    // Retrieve a single JobStatus by Id
    router.get("/:id", jobStatus.findOne);
    
    
    app.use('/api/jobStatus', router);
  };